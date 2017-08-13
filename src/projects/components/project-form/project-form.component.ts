import { Component, OnInit, EventEmitter, Output, OnChanges, SimpleChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from "@angular/forms";
import { Project } from "../../models/project.interface";
import { CustomValidators } from "ng2-validation";
import { Threat } from "../../../threats/models/threat.interface";
import { CumulativeSuccessService } from "../../../shared/services/cumulative-success-service/cumulative-success-service.service";

@Component({
    selector: 'project-form',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['project-form.component.scss'],
    templateUrl: 'project-form.component.html'
})
export class ProjectFormComponent implements OnChanges {
    @Input()
    project: Project;

    @Output()
    handleCreateProject: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    // @Output()
    // handleAddThreat: EventEmitter<Threat> = new EventEmitter<Threat>();

    @Output()
    handleCancelAdd: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    handleCancelEdit: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    handleUpdateProject: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    form: FormGroup = this.initProject();

    constructor(private fb: FormBuilder) { }

    get threats() {
        return this.form.get('threats') as FormArray;
    }

    get exists(): boolean {
        //todo not happy with this logic to define exists
        return this.project.title && this.project.title.length > 0;
    }

    ngOnChanges(change: SimpleChanges) {
        console.log('on changes');
        if (this.project && this.form) {
            const value = this.project;
            this.form.patchValue(value);

            if (value.threats) {
                for (const item of value.threats) {
                    const formThreat = this.initThreat();
                    formThreat.patchValue(item);

                    this.threats.push(formThreat);
                }
            }
        }
    }

    initThreat() {
        //todo need to centralise this as is duplicated else where
        return this.fb.group({
            // $key: [''],
            title: ['', [Validators.required]],
            impact: ['', [Validators.required]],
            probability: ['', [Validators.required]],
            score: '-1'
        });
    }

    initProject() {
        return this.fb.group({
            // $key: [''],
            title: ['', Validators.required],
            threats: this.fb.array([])
        });
    }

    createProject() {
        if (this.form.valid) {                        
            this.handleCreateProject.emit(this.form.value);
            this.form = this.initProject();
        }
    }

    updateProject() {
        if (this.form.valid) {
            this.handleUpdateProject.emit(this.form.value);
            this.form = this.initProject();
        }
    }

    emitSaveThreat(threat: FormGroup) {
        //emitSaveThreat(threat: Threat) {
        // this.handleAddThreat.emit(threat);
        this.threats.push(threat);
    }

    cancel() {
        if (this.exists) {
            this.handleCancelEdit.emit();
        } else {
            this.handleCancelAdd.emit();
        }
    }

}
