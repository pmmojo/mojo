import { Injectable } from '@angular/core';
import { Probability } from "../../enums/probability.enum";
import { Impact } from "../../enums/impact.enum";

@Injectable()
export class ThreatScoreService {
    static getScore(probability: Probability, impact: Impact): number {
        //todo this is a quick implementation, we have full test coverage to refactor
        if (probability == Probability.Impossible) return 1;
        if (impact == Impact.NoImpact) return 1;

        console.log('probability typeof', typeof probability);
        console.log('impact typeof', typeof impact);
        console.log('probability', probability);
        console.log('impact', impact);

        switch (probability) {
            case Probability.AlmostImpossible:
            console.log('am AlmostImpossible');
                switch (impact) {
                    case Impact.Catastrophic:
                        return 0.8;
                    case Impact.VeryHigh:
                        return 0.9;
                    case Impact.High:
                        return 0.92;
                    case Impact.Medium:
                        return 0.93;
                    case Impact.Low:
                        return 0.95;
                    case Impact.VeryLow:
                        return 0.98;
                }
            case Probability.Unlikely:
                switch (impact) {
                    case Impact.Catastrophic:
                        return 0.4;
                    case Impact.VeryHigh:
                        return 0.6;
                    case Impact.High:
                        return 0.7;
                    case Impact.Medium:
                        return 0.85;
                    case Impact.Low:
                        return 0.9;
                    case Impact.VeryLow:
                        return 0.95;
                }
            case Probability.Likely:
                switch (impact) {
                    case Impact.Catastrophic:
                        return 0.2;
                    case Impact.VeryHigh:
                        return 0.4;
                    case Impact.High:
                        return 0.5;
                    case Impact.Medium:
                        return 0.6;
                    case Impact.Low:
                        return 0.75;
                    case Impact.VeryLow:
                        return 0.92;
                }
            case Probability.AlmostCertain:
                switch (impact) {
                    case Impact.Catastrophic:
                        return 0.1;
                    case Impact.VeryHigh:
                        return 0.25;
                    case Impact.High:
                        return 0.35;
                    case Impact.Medium:
                        return 0.5;
                    case Impact.Low:
                        return 0.7;
                    case Impact.VeryLow:
                        return 0.9;
                }
            case Probability.Certain:
                switch (impact) {
                    case Impact.Catastrophic:
                        return 0;
                    case Impact.VeryHigh:
                        return 0.1;
                    case Impact.High:
                        return 0.2;
                    case Impact.Medium:
                        return 0.4;
                    case Impact.Low:
                        return 0.75;
                    case Impact.VeryLow:
                        return 0.85;
                }

            default:
                return 0;
        }
    }
}
