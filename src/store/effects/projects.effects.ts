import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import * as ProjectsActions from '../actions/projects.actions'
import { ProjectsService } from "../../projects/services/projects.service";

@Injectable()
export class ProjectsEffects {
    constructor(
        private actions$: Actions,
        private projectService: ProjectsService
    ) { }

    @Effect() getAllProject$: Observable<Action> = this.actions$
        .ofType(ProjectsActions.GET_ALL_PROJECTS)
        .map(toPayload)        
        .mergeMap(payload =>
            this.projectService.getAllProjects()
                .map(data => new ProjectsActions.GetAllProjectsSuccess(data))
                .catch(() => of(new ProjectsActions.GetAllProjectsFailed()))
        );

        @Effect() getProject$: Observable<Action> = this.actions$
        .ofType(ProjectsActions.GET_PROJECT)
        //.do(()=> console.log('ProjectsActions.GET_PROJECT'))
        .map(toPayload)
        .mergeMap(payload =>
            this.projectService.getProject(payload)
                .map(data => new ProjectsActions.GetProjectSuccess(data))
                .catch((error) => of(new ProjectsActions.GetProjectFailed(error)))
        );

        @Effect() createProject$: Observable<Action> = this.actions$
        .ofType(ProjectsActions.CREATE_PROJECT)
        .map(toPayload)
        .mergeMap(payload =>            
            this.projectService.addProject(payload)
                .then(data => new ProjectsActions.CreateProjectSuccess())
                .catch(() => of(new ProjectsActions.CreateProjectFailed()))
        );

        @Effect() updateProject$: Observable<Action> = this.actions$
        .ofType(ProjectsActions.UPDATE_PROJECT)
        .map(toPayload)
        .mergeMap(payload =>            
            this.projectService.updateProject(payload.key,payload.project)
                .then(data => new ProjectsActions.UpdateProjectSuccess())
                .catch(() => of(new ProjectsActions.UpdateProjectFailed()))
        );
}
