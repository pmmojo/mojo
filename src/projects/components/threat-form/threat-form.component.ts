import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from "@angular/forms";
import { CustomValidators } from 'ng2-validation';
import { ThreatScoreService } from "../../../shared/services/impact-probability/impact-probability.service";
import { Threat } from "../../../threats/models/threat.interface";
import { Probability } from "../../../shared/enums/probability.enum";
import { Impact } from "../../../shared/enums/impact.enum";

@Component({
    selector: 'threat-form',
    styleUrls: ['threat-form.component.scss'],
    templateUrl: 'threat-form.component.html'
})
export class ThreatInputComponent implements OnInit {
    form: FormGroup;

    @Output()
    handleSaveThreat: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
    //handleSaveThreat: EventEmitter<Threat> = new EventEmitter<Threat>();

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.initThreat();
    }

    get titleRequired() {
        return (
            this.form.get('title').hasError('required') && this.form.get('title').touched);
    }

    initThreat() {
        return this.fb.group({
            title: ['', [Validators.required]],
            impact: ['', [Validators.required]],
            probability: ['', [Validators.required]],
            score: ['-1']
        });
    }

    saveThreat() {        
        this.form.get('score').setValue(ThreatScoreService.getScore(Number(this.form.get('probability').value), Number(this.form.get('impact').value)));

        this.handleSaveThreat.emit(this.form);
        this.form = this.initThreat();
    }
}
