import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from "./components/list-item/list-item.component";
import { ProbabilityComponent } from "./components/probability-dropdown/probability-dropdown.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ImpactComponent } from "./components/impact-dropdown/impact-dropdown.component";

// components
//import { AuthFormComponent } from './components/auth-form/auth-form.component';

// services
//import { AuthService } from './services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListItemComponent,
    ProbabilityComponent,
    ImpactComponent
  ],
  exports: [
    ListItemComponent,
    ProbabilityComponent,
    ImpactComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        //ProjectsService
      ]
    };
  }
}