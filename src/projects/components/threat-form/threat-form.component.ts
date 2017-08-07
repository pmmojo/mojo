import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from "@angular/forms";
import { CustomValidators } from 'ng2-validation';

@Component({
    selector: 'threat-form',
    styleUrls: ['threat-form.component.scss'],
    templateUrl: 'threat-form.component.html'
})
export class ThreatInputComponent implements OnInit {
    form: FormGroup;

    @Output()
    handleSaveThreat: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.initThreat();
    }

    get titleRequired() {
        return (
            this.form.get('title').hasError('required') && this.form.get('title').touched);
    }

    get impactInvalid() {
        return (
            (this.form.get('impact').hasError('number') || this.form.get('impact').hasError('range'))
            && this.form.get('impact').touched);
    }

    get probabilityInvalid() {
        return (
            (this.form.get('probability').hasError('number') || this.form.get('probability').hasError('range'))
            && this.form.get('probability').touched);
    }

    initThreat() {
        return this.fb.group({            
            title: ['', [Validators.required]],
            impact: ['', [Validators.required, CustomValidators.number, CustomValidators.range([0.001, 1])]],
            probability: ['', [Validators.required, CustomValidators.number, CustomValidators.range([0.001, 1])]]
        });
    }

    saveThreat() {
        this.handleSaveThreat.emit(this.form);
        this.form = this.initThreat();
    }
}
