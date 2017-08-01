import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectsComponent } from "./containers/projects.component";
import { ProjectsService } from "./services/projects.service";
import { EffectsModule } from "@ngrx/effects";
import { ProjectsEffects } from "../store/effects/projects.effects";
import { ThreatInputComponent } from "./components/threat-form/threat-form.component";
import { ThreatsDisplayComponent } from "./components/threats-display/threats-display.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        EffectsModule.forFeature([ProjectsEffects])
    ],
    exports: [],
    declarations: [
        ProjectsComponent,
        ThreatInputComponent,
        ThreatsDisplayComponent
    ],
    providers: [ProjectsService],
})
export class ProjectsModule { }
