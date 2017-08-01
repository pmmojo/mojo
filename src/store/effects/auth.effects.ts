import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import * as AuthActions from '../actions/auth.actions'
import { AuthService } from "../../auth/shared/services/auth/auth.service";
import { Router } from "@angular/router";
import * as ProjectsActions from "../../store/actions/projects.actions";
import { ProjectsService } from "../../projects/services/projects.service";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private projectService: ProjectsService
    ) { }

    @Effect() login$: Observable<Action> = this.actions$
        .ofType(AuthActions.LOGIN)
        .map(toPayload)
      //  .do(()=> console.log('AuthActions.LOGIN'))
        .mergeMap(payload =>
            this.authService.loginUser(payload.email, payload.password)
                .then(data => new AuthActions.LoginSuccess())
                .catch(() => of(new AuthActions.LoginFailed()))
        );

        //th
        //{ dispatch: false }is.router.navigate(['/login'])
    @Effect() loginSuccess$: Observable<Action> = this.actions$
        .ofType(AuthActions.LOGIN_SUCCESS)       
        .mergeMap(payload =>
            Observable.of(new ProjectsActions.GetAllProjects())
            //todo would like to move this out of here...

            // this.projectService.getAllProjects()
            //     .map(data => new ProjectsActions.GetAllProjectsSuccess(data))
            //     .catch(() => of(new ProjectsActions.GetProjectFailed()))
        );
        

    @Effect() logout$: Observable<Action> = this.actions$
        .ofType(AuthActions.LOGOUT)
        .mergeMap(payload =>
            this.authService.logoutUser()
                .then(data => new AuthActions.LogoutSuccess())
                .catch(() => of(new AuthActions.LogoutFailed()))
        );

    @Effect({ dispatch: false }) logoutSuccess$: Observable<Action> = this.actions$
        .ofType(AuthActions.LOGOUT_SUCCESS)
        .do(() =>
            this.router.navigate(['/login'])
        );

    @Effect() register$: Observable<Action> = this.actions$
        .ofType(AuthActions.REGISTER)
        .map(toPayload)
        .mergeMap(payload =>
            this.authService.createUser(payload.email, payload.password)
                .then(data => {
                    new AuthActions.RegisterSuccess();
                    new ProjectsActions.GetAllProjects();
                })
                .catch(() => of(new AuthActions.RegisterFailed()))
        );

    @Effect({ dispatch: false }) registerSuccess$: Observable<Action> = this.actions$
        .ofType(AuthActions.REGISTER_SUCCESS)
        .do(() => this.router.navigate(['/']));

}
