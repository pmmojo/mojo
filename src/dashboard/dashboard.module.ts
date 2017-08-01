import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "./containers/dashboard/dashboard.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [RouterModule,
    CommonModule],
    exports: [],
    declarations: [
        DashboardComponent
    ],
    providers: [],
})
export class DashboardModule { }
