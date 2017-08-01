import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { User, AuthService } from "../../../auth/shared/services/auth/auth.service";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import * as fromRoot from '../../../store';
import * as authActions from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>(fromRoot.getAuthenticatedUsed);    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLogout() {    
    this.store.dispatch(new authActions.Logout());  
  }
}
