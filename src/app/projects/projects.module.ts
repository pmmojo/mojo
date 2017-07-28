import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from "./containers/projects.component";
import { ProjectsService } from "./services/projects.service";
import { EffectsModule } from "@ngrx/effects";
import { ProjectsEffects } from "../store/effects/projects.effects";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        EffectsModule.forFeature([ProjectsEffects])
    ],
    exports: [],
    declarations: [
        ProjectsComponent
    ],
    providers: [ProjectsService],
})
export class ProjectsModule { }
