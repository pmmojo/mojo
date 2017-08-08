import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-nav.component.scss'],
  template: `
    <div class="app-nav">
      <div class="wrapper">
          <a routerLink="dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="projects" routerLinkActive="active">Projects</a>                
      </div>
    </div>
  `
})
export class AppNavComponent {
  constructor() {}
  // <a [routerLink]="['/project-groups']">Project Groups</a>
  //         <a [routerLink]="['/threats']">Threats</a>  
}