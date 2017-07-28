import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThreatsComponent } from "./containers/threats.component";

@NgModule({
    imports: [RouterModule],
    exports: [],
    declarations: [
        ThreatsComponent
    ],
    providers: [],
})
export class ThreatsModule { }
