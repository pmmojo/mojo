import { Injectable } from '@angular/core';
import { Project } from "../../../projects/models/project.interface";
import { Threat } from "../../../threats/models/threat.interface";

@Injectable()
export class CumulativeSuccessService {
    static setThreatsCumulativeSuccess(threats: Threat[]): Threat[] {
        if (threats === null || threats === undefined) return new Array<Threat>();
        if (threats.length === 0) return threats;

        //we need to make sure firstly that the lowest threat score(least chance of success) is first in the list
        threats.sort(function (a, b) {
            return a.score - b.score;
        })

        let cumulativeScore = 1;//we start at 100% chance of success

        for (let threat of threats) {
            console.log('start of a threat')
            console.log('cumulativeScore',cumulativeScore)
            console.log('threat.score',threat.score)
            const currentCumulativeScore = (cumulativeScore * threat.score);
            console.log('(cumulativeScore * threat.score)',(cumulativeScore * threat.score))
            
            threat.cumulativeSuccessPercent = (currentCumulativeScore * 100);
            console.log('(currentCumulativeScore * 100)',(currentCumulativeScore * 100))
            cumulativeScore = currentCumulativeScore;
        }
        
        return threats;
    }

    static setProjectSuccessPrediction(project: Project): void {

    }
}