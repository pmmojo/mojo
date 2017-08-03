import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from "@angular/forms";
import { CustomValidators } from 'ng2-validation';

@Component({
    selector: 'threat-form',
    template: `   
        <h3>
   threat input
        </h3>

        <div [formGroup]="form">        
          <label>Title</label>
          <input type="text" placeholder="Enter threat title" formControlName="title">
                
          <div class="error" *ngIf="required">
              Workout name is required
            </div>
          <label>Impact</label>
          <input type="text" placeholder="Enter threat impact" formControlName="impact">
          <p *ngIf="">number error</p>
          <p *ngIf="form.get('impact').hasError('range') && this.form.get('impact').touched">range error</p>
          <div class="error" *ngIf="required">
              Workout name is required
            </div>
          <label>Probability</label>
          <input type="text" placeholder="Enter threat probability" formControlName="probability">
          <p *ngIf="form.get('probability').hasError('number') && this.form.get('probability').touched">number error</p>
          <p *ngIf="form.get('probability').hasError('range') && this.form.get('probability').touched">range error</p>
          
          <button [disabled]="form.invalid" type="button" (click)="saveThreat()">Add threat</button>
        
        </div>        
  `
})
export class ThreatInputComponent implements OnInit {
    form: FormGroup;

    @Output()
    handleSaveThreat: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.initThreat();
    }

    get impactInvalid() {
    return (
    //   this.form.get('name').hasError('required') &&
    //   this.form.get('name').touched

      this.form.get('impact').hasError('number') && this.form.get('impact').touched
    );
  }

    initThreat() {
        return this.fb.group({
            title: ['', [Validators.required]],
            impact: ['',  [Validators.required,CustomValidators.number,CustomValidators.range([0.001, 1])]],
            probability: ['', [Validators.required,CustomValidators.number,CustomValidators.range([0.001, 1])]]
        });
    }

    saveThreat() {
        this.handleSaveThreat.emit(this.form);
        this.form = this.initThreat();
    }
}
