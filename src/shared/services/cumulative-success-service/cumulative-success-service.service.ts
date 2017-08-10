import { Injectable } from '@angular/core';
import { Project } from "../../../projects/models/project.interface";
import { Threat } from "../../../threats/models/threat.interface";

@Injectable()
export class CumulativeSuccessService {
    static setThreatsCumulativeSuccess(threats: Threat[]): Threat[] {
        console.log('am in setThreatsCumulativeSuccess');
        if (threats === null || threats === undefined) return new Array<Threat>();
        if (threats.length === 0) return threats;
        
        threats.sort(function(a, b){
            return b.score - a.score;
        })
        //todo sort threats by threat score with the lowest being first in the list
        let cumulativeScore = 1;

        //then loop through list
        for (let threat of threats) {
            
        }

        return threats;
    }

    static setProjectSuccessPrediction(project: Project): void {

    }
}