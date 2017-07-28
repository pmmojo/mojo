import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "./containers/dashboard.component";

@NgModule({
    imports: [RouterModule],
    exports: [],
    declarations: [
        DashboardComponent
    ],
    providers: [],
})
export class DashboardModule { }
