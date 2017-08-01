import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from "@angular/forms";

import { Store } from "@ngrx/store";
import * as fromRoot from '../../../store';
import * as projectActions from "../../../store/actions/projects.actions";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';

import { Project } from "../../models/project.interface";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnInit {
  project$: Observable<Project>;
  allProjects$: Observable<Project[]>;

view: any[] = [700, 400];

  results:any[];
  
  constructor(private store: Store<fromRoot.State>,
    private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }

  // form = this.fb.group({
  //   title: ['', Validators.required],
  //   threats: this.fb.array([])    
  // });

  // get threats() {
  //   return this.form.get('threats') as FormArray;
  // }

  // get newThreat() {
  //   return this.form.get('threat') as FormGroup;
  // }

  // addThreat(event:FormGroup) {
  //   this.threats.push(event);    
  // }

  // initThreat() {
  //   // initialize our address

  // }

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onSelect(event:any){
        console.log(event);
    }

  ngOnInit(): void {    
    this.route.params
      .map(param => this.store.dispatch(new projectActions.GetProject(param.id)))
      .subscribe();

    this.project$ = this.store.select(fromRoot.getSelectedProject);
this.results=[
    {
    "name": "Germany",
    "value": 40632
  },
  {
    "name": "United States",
    "value": 49737
  },
  {
    "name": "France",
    "value": 36745
  },
  {
    "name": "United Kingdom",
    "value": 36240
  },
  {
    "name": "Spain",
    "value": 33000
  },
  {
    "name": "Italy",
    "value": 35800
  }
];
  }

  handleSaveProject(project: Project) {
    this.store.dispatch(new projectActions.SaveProject(project));  
  }
}
