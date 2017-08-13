import { Component, Input } from '@angular/core';
import { Threat } from "../../../threats/models/threat.interface";
import { ProbabilityLabelByStringId } from "../../../shared/enums/probability.enum";
import { ImpactLabelByStringId } from "../../../shared/enums/impact.enum";

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
       </tr>
       <tbody>
            <tr *ngFor="let threat of threats; let i = index">
                    <td>
                        {{threat.title}}
                    </td>
                    <td>                
                        {{impactLabel(threat.impact)}}
                    </td>
                    <td>
                        {{probabilityLabel(threat.probability)}}
                    </td>
                    <td>
                        {{threat.score}}
                    </td>            
            </tr>
       </tbody>
       </table>
  `
})
export class ThreatsDisplayComponent {
    @Input()
    threats: Threat[];

    probabilityLabel(prob: string): string {
        return ProbabilityLabelByStringId(prob);
    }

    impactLabel(prob: string): string {
        return ImpactLabelByStringId(prob);
    }
}
