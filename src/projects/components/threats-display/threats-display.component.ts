import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Threat } from "../../../threats/models/threat.interface";

@Component({
    selector: 'threats-display',
    template: `   
       the list           
       <table id="table" class="table table-hover table-mc-light-blue">
       <tr>
            <th>
                    Threat
            </th>
            <th>
                    Impact
            </th>
            <th>
                    Probability
            </th>
            <th>
                    Impact x Prob

            </th>
            <th>
                    Cumulative level of success

            </th>
       </tr>
       <tbody>
       <tr *ngFor="let threat of threats; let i = index">
            <td>
                {{threat.title}}
            </td>
            <td>
                {{threat.impact}}
            </td>
            <td>
                {{threat.probability}}
            </td>
            <td>
                {{threat.probability}}
            </td>
            <td>
                {{threat.probability}}
            </td>
       </tr>
       </tbody>
       </table>
  `
})
export class ThreatsDisplayComponent {
    @Input()
    threats: Threat[];

}
