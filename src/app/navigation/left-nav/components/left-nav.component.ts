import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'left-nav',
  template: `
    <ul>
        <li>
            <a [routerLink]="['/dashboard']">Dashboard</a>
        </li>
        <li>
            <a [routerLink]="['/projects']">Projects</a>
        </li>
        <li>
            <a [routerLink]="['/project/1']">Test Project 1</a>            
        </li>
        <li>
            <a [routerLink]="['/project/2']">Test Project 2</a>            
        </li>
        <li>
            <a [routerLink]="['/project-groups']">Project Groups</a>
        </li>
        <li>
            <a [routerLink]="['/threats']">Threats</a>
        </li>
    </ul>
  `
})
export class LeftNavComponent {
  
}
