import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Project } from "../models/project.interface";

import * as fromRoot from '../../store';
import { Store } from "@ngrx/store";
import { AngularFireDatabase } from "angularfire2/database";
import { AuthService, User } from "../../auth/shared/services/auth/auth.service";

@Injectable()
export class ProjectsService {    
        user$ = this.store.select<User>(fromRoot.getAuthenticatedUsed).subscribe();
        userSubscription$ = this.store.select<User>(fromRoot.getAuthenticatedUsed).subscribe();
    
    constructor(
        private store: Store<fromRoot.State>,
        private db: AngularFireDatabase,
        private authService: AuthService
    ) { 
    }

     get uid() {
    return this.authService.user.uid;
  }

    getProject(key: string) :Observable<Project> {
        //console.log('service 1');
        if (!key) return Observable.of(new Project());
//console.log('service 2.', key);
        return this.store.select<Project[]>(fromRoot.getAllProjects)
            .map(projects => projects.find((project: Project) => project.$key === key));
    }

    addProject(project: Project) {       
        return this.db.list(`meals/${this.uid}`).push(project);
    }

    updateMeal(key: string, meal: Project) {
        return this.db.object(`meals/${this.uid}/${key}`).update(meal);
    }

    removeMeal(key: string) {
        return this.db.list(`meals/${this.uid}`).remove(key);
    }

    getAllProjects() {        
        return this.db.list(`meals/${this.uid}`);
    }
}