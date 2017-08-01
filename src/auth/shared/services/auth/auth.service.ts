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
  //user: User;

  auth$ = this.af.authState
    .do(next => {
      if (!next) {
        this.store.dispatch(new authActions.SetLoggedInUser(null))
       // console.log('LOOK');
        return;
      }

      const user = {
        email: next.email,
        uid: next.uid,
        authenticated: true
      };

      //todo get user summary type object from server with name etc

      this.store.dispatch(new authActions.SetLoggedInUser(user))
    });

  constructor(
    private store: Store<fromRoot.State>,
    private af: AngularFireAuth
  ) { }

  get user() {
    //console.log('this.af',this.af);
    //console.log('this.af.auth',this.af.auth);
   // console.log('this.af.auth.currentUser',this.af.auth.currentUser);
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