import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//components
import { LeftNavComponent } from './left-nav/components/left-nav.component';

@NgModule({
    imports: [RouterModule],
    exports: [LeftNavComponent],
    declarations: [
        LeftNavComponent
    ],
    providers: [],
})
export class NavigationModule { }
