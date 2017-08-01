import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from "./components/list-item/list-item.component";
//import { ReactiveFormsModule } from '@angular/forms';

// components
//import { AuthFormComponent } from './components/auth-form/auth-form.component';

// services
//import { AuthService } from './services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ListItemComponent
  ],
  exports: [
    ListItemComponent
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