import { Component, Input } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { Impact, ImpactLabel } from "../../enums/impact.enum";
import { DropdownItem } from "../models/dropdown-item.model";

@Component({
    selector: 'impact-dropdown',
    template: `    
    <div [formGroup]="parent">                        
        <select formControlName="impact" class="form-control input-sm">    
            <option value="">Select</option>
            <option *ngFor="let impact of impacts"
                [value]="impact.id" 
                [selected]="impact.id == impact">
                    {{impact.description}}
            </option>
        </select>
    </div>
    
    `
})
export class ImpactComponent {

    @Input()
    parent: FormGroup;
    
    impacts: DropdownItem[] = [
        { description: ImpactLabel(Impact.Catastrophic), id: Impact.Catastrophic },
        { description: ImpactLabel(Impact.VeryHigh), id: Impact.VeryHigh },
        { description: ImpactLabel(Impact.High), id: Impact.High },
        { description: ImpactLabel(Impact.Medium), id: Impact.Medium },
        { description: ImpactLabel(Impact.Low), id: Impact.Low },
        { description: ImpactLabel(Impact.VeryLow), id: Impact.VeryLow },
        { description: ImpactLabel(Impact.NoImpact), id: Impact.NoImpact },
    ];
}
