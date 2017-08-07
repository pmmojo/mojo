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

    getProject(key: string): Observable<Project> {
        if (!key) return Observable.of(new Project());

        return this.db.object(`projects/${this.uid}/${key}`);            
    }

    addProject(project: Project) {
        const projectKey = this.db.list('/').push(undefined).key;

        var newProjectData = {};
        newProjectData[`projects/${this.uid}/${projectKey}`] = project;

        newProjectData[`projectSummarys/${this.uid}/${projectKey}`] = {
            title: project.title,
            projectKey:projectKey
        };

        //may not even need this
        newProjectData[`projectThreats/${this.uid}/${projectKey}`] = project.threats;

        return this.db.object('/').update(newProjectData);
    }

    updateMeal(key: string, meal: Project) {
        return this.db.object(`meals/${this.uid}/${key}`).update(meal);
    }

    removeMeal(key: string) {
        return this.db.list(`meals/${this.uid}`).remove(key);
    }

    getAllProjects() {
        //todo this is going to get summaries!
        //add return type of summary objects not full project!
        return this.db.list(`projectSummarys/${this.uid}`);
    }
}