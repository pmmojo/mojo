import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Threat } from "../../../threats/models/threat.interface";
import { Probability, ProbabilityLabel } from "../../../shared/enums/probability.enum";

@Component({
    selector: 'threats-display',
    template: `                
       <table *ngIf="threats.length > 0" id="table" class="table table-hover table-mc-light-blue">
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
                Score
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
                {{probabilityLabel(threat.probability)}}
            </td>
            <td>
                {{threat.score}}
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

    probabilityLabel(prob:Probability):string{
        return ProbabilityLabel(prob);
    }
}
