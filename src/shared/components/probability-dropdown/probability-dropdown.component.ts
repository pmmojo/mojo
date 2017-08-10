import { Component, Input } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { Probability, ProbabilityLabel } from "../../enums/probability.enum";
import { DropdownItem } from "../models/dropdown-item.model";

@Component({
    selector: 'probability-dropdown',
    template: `    
    <div [formGroup]="parent">                        
        <select formControlName="probability" class="form-control input-sm">    
            <option value="">Select</option>
            <option *ngFor="let probability of probabilitys"
                [value]="probability.id" 
                [selected]="probability.id == probability">
                    {{probability.description}}
            </option>
        </select>
    </div>
    
    `
})
export class ProbabilityComponent {

    @Input()
    parent: FormGroup;

    probabilitys: DropdownItem[] = [
        { description: ProbabilityLabel(Probability.Certain), id: Probability.Certain },
        { description: ProbabilityLabel(Probability.AlmostCertain), id: Probability.AlmostCertain },
        { description: ProbabilityLabel(Probability.Likely), id: Probability.Likely },
        { description: ProbabilityLabel(Probability.Unlikely), id: Probability.Unlikely },
        { description: ProbabilityLabel(Probability.AlmostImpossible), id: Probability.AlmostImpossible },
        { description: ProbabilityLabel(Probability.Impossible), id: Probability.Impossible }
    ];
}
