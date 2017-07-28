import { Injectable } from '@angular/core';

import 'rxjs/add/operator/do';

import { AngularFireAuth } from 'angularfire2/auth';
import { Store } from "@ngrx/store";

import * as fromRoot from '../../../../store';
import * as authActions from '../../../../store/actions/auth.actions';

export interface User {
  email: string,
  uid: string,
  authenticated: boolean
}

@Injectable()
export class AuthService {

  auth$ = this.af.authState
    .do(next => {
      if (!next) {
        this.store.dispatch(new authActions.SetLoggedInUser(null))
        return;
      }

      const user: User = {
        email: next.email,
        uid: next.uid,
        authenticated: true
      };

      this.store.dispatch(new authActions.SetLoggedInUser(user))
    });

  constructor(
    private store: Store<fromRoot.State>,
    private af: AngularFireAuth
  ) { }

  get user() {
    return this.af.auth.currentUser;
  }

  get authState() {
    return this.af.authState;
  }

  createUser(email: string, password: string) {
    return this.af.auth
      .createUserWithEmailAndPassword(email, password).catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  }

  loginUser(email: string, password: string) {
    return this.af.auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  }

  logoutUser() {
    return this.af.auth.signOut();
  }

}