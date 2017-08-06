import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { NgxChartsModule } from '@swimlane/ngx-charts';

import * as Reducers from "../store";
//import { ProjectsEffects } from "./store/effects/projects.effects";

//containers
import { AppComponent } from './containers/app/app.component';

//feature modules
import { NavigationModule } from "../navigation/navigation.module";
import { DashboardModule } from "../dashboard/dashboard.module";
import { ThreatsModule } from "../threats/threats.module";
import { ProjectsModule } from "../projects/projects.module";
import { ProjectGroupsModule } from "../project-groups/project-groups.module";

//components to be removed once routing in indiv modules
import { DashboardComponent } from "../dashboard/containers/dashboard/dashboard.component";
import { ThreatsComponent } from "../threats/containers/threats.component";
import { ProjectsComponent } from "../projects/containers/projects/projects.component";
import { ProjectGroupsComponent } from "../project-groups/containers/project-groups.component";
import { ProjectsService } from "../projects/services/projects.service";
import { AuthModule } from "../auth/auth.module";
import { SharedModule } from "../shared/shared.module";
import { AuthGuard } from "../auth/shared/guards/auth.guard";
import { AppNavComponent } from "./components/app-nav/app-nav.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { ProjectEditComponent } from "../projects/containers/project-edit/project-edit.component";
import { ProjectViewComponent } from "../projects/containers/project-view/project-view.component";

const appRoutes: Routes = [
  { path: '', component: DashboardComponent , canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'threats', component: ThreatsComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'project/new', component: ProjectEditComponent, canActivate: [AuthGuard] },
  { path: 'project/edit/:id', component: ProjectEditComponent, canActivate: [AuthGuard] },
  { path: 'project/view/:id', component: ProjectViewComponent, canActivate: [AuthGuard] },
  { path: 'project-groups', component: ProjectGroupsComponent, canActivate: [AuthGuard] },
  { path: 'project-group/:id', component: ProjectGroupsComponent, canActivate: [AuthGuard] },
  { path: 'threats', component: ThreatsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent
    ,  
     AppHeaderComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(Reducers.reducers),
    EffectsModule.forRoot([]),
ReactiveFormsModule,
SharedModule,
NgxChartsModule,
    //feature modules
    AuthModule,
    NavigationModule,
    DashboardModule,
    ThreatsModule,
    ProjectsModule,
    ProjectGroupsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
