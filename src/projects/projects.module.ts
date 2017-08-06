import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectsComponent } from "./containers/projects/projects.component";
import { ProjectsService } from "./services/projects.service";
import { EffectsModule } from "@ngrx/effects";
import { ProjectsEffects } from "../store/effects/projects.effects";
import { ThreatInputComponent } from "./components/threat-form/threat-form.component";
import { ThreatsDisplayComponent } from "./components/threats-display/threats-display.component";
import { SharedModule } from "../shared/shared.module";
import { ProjectEditComponent } from "./containers/project-edit/project-edit.component";
import { ProjectViewComponent } from "./containers/project-view/project-view.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProjectFormComponent } from "./components/project-form/project-form.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        EffectsModule.forFeature([ProjectsEffects]),
        NgxChartsModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        ProjectsComponent,
        ProjectViewComponent,
ProjectEditComponent,

        ProjectFormComponent,
        ThreatInputComponent,
        ThreatsDisplayComponent
    ],
    providers: [ProjectsService],
})
export class ProjectsModule { }
