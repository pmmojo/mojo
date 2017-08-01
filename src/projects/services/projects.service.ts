
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
//import { AuthenticationToken } from "app/authentication-token";
//import { User } from "app/users/models/user.interface";
import { Project } from "../models/project.interface";
import { HttpClient } from "@angular/common/http";
import * as fromRoot from '../../store';
import { Store } from "@ngrx/store";
import { AngularFireDatabase } from "angularfire2/database";
import { AuthService, User } from "../../auth/shared/services/auth/auth.service";

@Injectable()
export class ProjectsService {
    //meals$: Observable<Project[]> = this.db.list(`meals/${this.uid}`)
    //.do(next => console.log('meals', next));    
    //.do(next => this.store.set('meals', next));
    //     .do(next => this.store.dispatch(new authActions.SetLoggedInUser(next)));
        user$ = this.store.select<User>(fromRoot.getAuthenticatedUsed).subscribe();
        userSubscription$ = this.store.select<User>(fromRoot.getAuthenticatedUsed).subscribe();
    //meals$: Observable<Project[]> = this.db.list(`meals/${this.uid}`);
        

        //uid$ = this.store.select<User>(fromRoot.getAuthenticatedUsed).subscribe();

    constructor(
        private store: Store<fromRoot.State>,
        private db: AngularFireDatabase,
        private authService: AuthService
    ) { 
//console.log('user$',this.user$.);
    }

     get uid() {
    return this.authService.user.uid;
  }

    getProject(key: string) {
        if (!key) return Observable.of({});

        return this.store.select<Project[]>(fromRoot.getAllProjects)
            .map(meals => meals.find((meal: Project) => meal.$key === key));
    }

    addProject(project: Project) {
       // console.log('add meal', project);
        return this.db.list(`meals/${this.uid}`).push(project);
    }

    updateMeal(key: string, meal: Project) {
        return this.db.object(`meals/${this.uid}/${key}`).update(meal);
    }

    removeMeal(key: string) {
        return this.db.list(`meals/${this.uid}`).remove(key);
    }

    getAllProjects() {
        //console.log('service getAllProjects()');
        return this.db.list(`meals/${this.uid}`);
    }
}