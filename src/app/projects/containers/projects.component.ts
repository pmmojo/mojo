import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Store } from "@ngrx/store";

import 'rxjs/add/operator/switchMap';

import * as fromRoot from '../../store';
import * as projectActions from "../../store/actions/projects.actions";
import { Observable } from "rxjs/Observable";
import { Project } from "../models/project.interface";

@Component({
  template: `
    <h1>This is the Projects page</h1>
    <pre>{{project$|async|json}}</pre>
  `
})
export class ProjectsComponent implements OnDestroy {
  project$: Observable<Project>;

  constructor(private store: Store<fromRoot.State>,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //subscribe to the seleteced project in the store
    this.project$ = this.store.select(fromRoot.getSelectedProject);
    //this.store.dispatch(new projectActions.GetProject(123))
    // this.route.params
    //   .switchMap(param => );
  }

  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
  }

}
