import { Component, OnInit, EventEmitter, Output, OnChanges, SimpleChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from "@angular/forms";
import { Project } from "../../models/project.interface";
import { Threat } from "../../../threats/models/threat.interface";



@Component({
    selector: 'project-form',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['project-form.component.scss'],
    templateUrl: 'project-form.component.html'
})
export class ProjectFormComponent implements OnInit {

    @Input()
    project: Project;

    @Output()
    handleSaveProject: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    @Output()
    handleSaveThreat: EventEmitter<Threat> = new EventEmitter<Threat>();

    form: FormGroup;

    constructor(private fb: FormBuilder) { }

    get threats() {
        return this.form.get('threats') as FormArray;
    }

    exists: boolean = false;

    // ngOnChanges(change:SimpleChanges) {
    //     console.log('changing project form');
    //     if (this.project && this.project.title) {
    //         //this.exists = true;
    //         //this.emptyIngredients();

    //         const value = this.project;
    //         this.form.patchValue(value);

    //         if (value.threats) {
    //             for (const item of value.threats) {
    //                 this.threats.push(new FormControl(item));
    //             }
    //         }
    //     }
    // }

    ngOnInit(): void {
        this.form = this.initThreat();
    }

    initThreat() {
        return this.fb.group({
            title: ['', Validators.required],
            threats: this.fb.array([])
        });
    }


    createProject() {
        console.log('createProject', this.form.valid);

        if (this.form.valid) {
            this.handleSaveProject.emit(this.form.value);
            this.form = this.initThreat();
        }

    }

    emitSaveThreat(threat: FormGroup) {
        //this.handleSaveThreat.emit(threat.value);
        this.threats.push(threat);
    }
}
