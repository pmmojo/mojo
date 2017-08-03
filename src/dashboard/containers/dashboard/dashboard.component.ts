import { Component } from '@angular/core';

@Component({  
  styleUrls:['dashboard.component.scss'],
  template: `
    <div class="meals">
      <div class="meals__title">
        <h1>
          <img src="/images/food.svg">
          Dashboard to go here
        </h1>
       
      </div>
      
      <ng-template #loading>
        <div class="message">
          <img src="/images/loading.svg">
          Fetching dashboard...
        </div>
      </ng-template>
    </div>
  `
})
export class DashboardComponent { 
}

 // <a 
        //   class="btn__add"
        //   [routerLink]="['../meals/new']">
        //   <img src="/images/add-white.svg">
        //   New meal
        // </a>