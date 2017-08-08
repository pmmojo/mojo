import { Component, OnInit, EventEmitter, Output, OnChanges, SimpleChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from "@angular/forms";
import { Project } from "../../models/project.interface";
import { CustomValidators } from "ng2-validation";

@Component({
    selector: 'project-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['project-form.component.scss'],
    templateUrl: 'project-form.component.html'
})
export class ProjectFormComponent implements OnChanges {
    @Input()
    project: Project;

    @Output()
    handleCreateProject: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

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
        return this.fb.group({
            // $key: [''],
            title: ['', [Validators.required]],
            impact: ['', [Validators.required, CustomValidators.number, CustomValidators.range([0.001, 1])]],
            probability: ['', [Validators.required, CustomValidators.number, CustomValidators.range([0.001, 1])]]
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
