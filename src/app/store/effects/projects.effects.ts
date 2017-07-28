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

    @Effect() login$: Observable<Action> = this.actions$
        .ofType(ProjectsActions.GET_PROJECT)
        .map(toPayload)
        .mergeMap(payload =>
            this.projectService.get(payload.id)
                .map(data => new ProjectsActions.GetProjectSuccess(data))
                .catch(() => of(new ProjectsActions.GetProjectFailed()))
        );
}
