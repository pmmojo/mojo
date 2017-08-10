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
        //todo here we are in a position to set the threatScore before emitting        
        let probability: Probability = Probability[<string>this.form.get('probability').value];
        let impact: Impact = <Impact>this.form.get('impact').value;

        console.log( probability);
        console.log( impact);

        console.log(typeof probability);
        console.log(typeof impact);
        
        this.form.get('score').setValue(ThreatScoreService.getScore(probability, impact));

        this.handleSaveThreat.emit(this.form);
        this.form = this.initThreat();
    }
}
