import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Store, ActionsSubject } from "@ngrx/store";
import * as fromRoot from '../../../store';
import * as projectActions from "../../../store/actions/projects.actions";

import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/filter';

import { Project } from "../../models/project.interface";
import { Threat } from "../../../threats/models/threat.interface";
import { CumulativeSuccessService } from "../../../shared/services/cumulative-success-service/cumulative-success-service.service";

@Component({
  templateUrl: 'project-edit.component.html'
})
export class ProjectEditComponent implements OnInit, OnDestroy {
  project: Project;
  redirectSub: Subscription;

  constructor(private store: Store<fromRoot.State>,
    private router: Router,
    private route: ActivatedRoute,
    private actionsSubject: ActionsSubject) { }

  get projectKey(): string {
    return this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.route.params
      .map(param => {
        if (param.id) {
          this.redirectSub = this.actionsSubject
            .asObservable()
            .filter(action => action.type === projectActions.UPDATE_PROJECT_SUCCESS)
            .subscribe((action: projectActions.UpdateProjectSuccess) => this.redirectToProjectView());

          this.store.dispatch(new projectActions.GetProject(param.id))

          this.store.select(fromRoot.getSelectedProject).subscribe(project => {
            //&& project.$key
            if (project) {
              this.project = project;
            } else {
              //todo we haven't found one - 404 page
              console.log(`Project ${param.id} not found - TODO Display 404 page`);
            }
          });
        }
        else {
          this.redirectSub = this.actionsSubject
            .asObservable()
            .filter(action => action.type === projectActions.CREATE_PROJECT_SUCCESS)
            .subscribe((action: projectActions.UpdateProjectSuccess) => this.router.navigate(['/projects']));

          this.project = new Project();
        }
      })
      .subscribe();
  }

  handleCreateProject(project: Project) {
    this.store.dispatch(new projectActions.CreateProject(project));

    //listener set up to redirect
  }

  handleUpdateProject(project: Project) {
    this.store.dispatch(new projectActions.UpdateProject({ key: this.projectKey, project }));

    //listener set up to redirect
  }

  // handleThreatAdded(threat: Threat) {
  //   // var xxx = [...this.project.threats, threat];
  //   // console.log(this.project.threats === xxx);
  //   this.project.threats = CumulativeSuccessService.setThreatsCumulativeSuccess([...this.project.threats, threat]);
  //   this.project.title="overwrite";
  // }

  handleCancelAdd() {
    this.router.navigate(['/projects'])
  }

  handleCancelEdit() {
    this.redirectToProjectView();
  }

  private redirectToProjectView() {
    this.router.navigate(['/project/view', this.projectKey]);
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }
}
