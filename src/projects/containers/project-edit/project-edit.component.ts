import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from "@angular/forms";

import { Store } from "@ngrx/store";
import * as fromRoot from '../../../store';
import * as projectActions from "../../../store/actions/projects.actions";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';

import { Project } from "../../models/project.interface";
import { ActivatedRoute, Router } from "@angular/router";
import { Threat } from "../../../threats/models/threat.interface";

@Component({
  templateUrl: 'project-edit.component.html'
})
export class ProjectEditComponent implements OnInit {
  project: Project;

  constructor(private store: Store<fromRoot.State>,
    private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .map(param => {
        if (param.id) {
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
          this.project = new Project();
        }
      })
      .subscribe();
  }

  handleCreateProject(project: Project) {
    this.store.dispatch(new projectActions.CreateProject(project));

    //todo somehow here we want to listen for the action create project success and redirect to view version
  }

  handleUpdateProject(project: Project) {
    const key = this.route.snapshot.params.id;
    this.store.dispatch(new projectActions.UpdateProject({ key, project }));

    //todo somehow here we want to listen for the action update project success and redirect to view version
  }

  handleThreatAdded(threat: Threat) {
    this.project.threats = [...this.project.threats, threat];
  }

  handleCancelAdd() {
    //go back to the projects list
    this.router.navigate(['/projects'])
  }

  handleCancelEdit() {
    //go back to the project edit
    const key = this.route.snapshot.params.id;
    this.router.navigate(['/project/view', key]);
  }
}
