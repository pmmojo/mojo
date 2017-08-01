import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Threat } from "../../../threats/models/threat.interface";

@Component({
    selector: 'threats-display',
    template: `   
       the list           
       <table>
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
       </tr>
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
       </tr>
       </table>
  `
})
export class ThreatsDisplayComponent {
    @Input()
    threats: Threat[];

}
