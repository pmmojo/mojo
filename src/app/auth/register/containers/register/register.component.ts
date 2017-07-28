import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store } from "@ngrx/store";
import * as fromRoot from '../../../../store';
import * as authActions from '../../../../store/actions/auth.actions';

@Component({  
  template: `
    <div>
      <auth-form (submitted)="registerUser($event)">
        <h1>Register</h1>
        <a routerLink="/login">Already have an account?</a>
        <button type="submit">
          Create account
        </button>
        <div class="error" *ngIf="error">
          {{ error }}
        </div>
      </auth-form>
    </div>
  `
})
export class RegisterComponent {

  error: string;

  constructor(private store: Store<fromRoot.State>) { }

  async registerUser(event: FormGroup) {
    try {
      await this.store.dispatch(new authActions.Register(event.value));
    } catch (err) {
      this.error = err.message;
    }
  }
}