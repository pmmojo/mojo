import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from "@angular/forms";

@Component({
    selector: 'threat-form',
    template: `   
        <h3>
   threat input
        </h3>

        <div [formGroup]="form">        
          <label>Title</label>
          <input type="text" placeholder="Enter threat title" formControlName="title">
          <label>Impact</label>
          <input type="text" placeholder="Enter threat impact" formControlName="impact">
          <label>Probability</label>
          <input type="text" placeholder="Enter threat probability" formControlName="probability">
          <button type="button" (click)="saveThreat()">Add threat</button>
        
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

    initThreat() {
        return this.fb.group({
            title: ['', Validators.required],
            impact: ['', Validators.required],
            probability: ['', Validators.required]
        });
    }

    saveThreat() {
        this.handleSaveThreat.emit(this.form);
        this.form = this.initThreat();
    }
}
