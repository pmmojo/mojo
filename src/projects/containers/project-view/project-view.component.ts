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
  templateUrl: 'project-view.component.html'
})
export class ProjectViewComponent implements OnInit {
  project: Project;

  view: any[] = [700, 400];

  results: any[];

  constructor(private store: Store<fromRoot.State>,
    private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  exists: boolean = false;
  threatEditOpen: boolean = false;

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  //  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454']
  };

  onSelect(event: any) {    
    this.threatEditOpen = true;
  }

  handleCancel() {
    this.threatEditOpen = false;
  }

  ngOnInit(): void {
    this.route.params
      .map(param => {
        this.exists = param.id !== undefined;
        this.store.dispatch(new projectActions.GetProject(param.id))

        if (this.exists) {
          this.store.select(fromRoot.getSelectedProject).subscribe(project => {
            if (project) {
              this.project = project;

              //todo this is graph creation and can live in a service
              let results = [];

              if (project.threats) {
                for (let entry of project.threats) {
                  results = [...results, { name: entry.title, value: entry.cumulativeSuccessPercent, min:0, max:0 }];
                }
              }

              this.results = results;
            }
          });
        }
        else {
          this.project = new Project();
        }
      })
      .subscribe();
  }
}
