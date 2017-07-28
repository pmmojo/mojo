import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store } from "@ngrx/store";
import * as fromRoot from '../../../../store';
import * as authActions from '../../../../store/actions/auth.actions';

@Component({
  template: `
    <div>
      <auth-form (submitted)="loginUser($event)">
        <h1>Login</h1>
        <a routerLink="/register">Not registered?</a>
        <button type="submit">
          Login
        </button>
        <div class="error" *ngIf="error">
          {{ error }}
        </div>
      </auth-form>
    </div>
  `
})
export class LoginComponent {

  error: string;

  constructor(private store: Store<fromRoot.State>) { }

  loginUser(event: FormGroup) {
    this.store.dispatch(new authActions.Login(event.value));
  }
}