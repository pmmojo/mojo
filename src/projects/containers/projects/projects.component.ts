import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from "@angular/forms";

import { Store } from "@ngrx/store";
import * as fromRoot from '../../../store';
import * as projectActions from "../../../store/actions/projects.actions";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';

import { Project } from "../../models/project.interface";

//         <div formArrayName="threats">        
//             <label *ngFor="let c of threats.controls; index as i;">
//               <input [formControlName]="i" placeholder="e.g. Eggs">
//               <span
//                 class="meal-form__remove"
//                 (click)="removeIngredient(i)">
//               </span>
//             </label>

// </div>

@Component({
  templateUrl: 'projects.component.html'
})
export class ProjectsComponent implements OnInit {
  project$: Observable<Project>;
  allProjects$: Observable<Project[]>;

  constructor(private store: Store<fromRoot.State>, private fb: FormBuilder) { }

  form = this.fb.group({
    title: ['', Validators.required],
    threats: this.fb.array([])    
  });

  get threats() {
    return this.form.get('threats') as FormArray;
  }

  get newThreat() {
    return this.form.get('threat') as FormGroup;
  }

  addThreat(event:FormGroup) {
    this.threats.push(event);    
  }

  initThreat() {
    // initialize our address
   
  }

  ngOnInit(): void {    
    this.store.dispatch(new projectActions.GetAllProjects());

    //todo only get project if we have an id
    this.project$ = this.store.select(fromRoot.getSelectedProject);

    this.allProjects$ = this.store.select<Project[]>(fromRoot.getAllProjects);
  }

  handleSaveProject(project: Project) {
    this.store.dispatch(new projectActions.SaveProject(project));

    //todo need something here to redirect upon a successful save.
    //dont want to do that in the effect as we may not want to do that if we save a project elsewhere
  }
}
