import { Probability } from "../../shared/enums/probability.enum";
import { Impact } from "../../shared/enums/impact.enum";

export class Threat {
    title: string;
    impact: Impact;
    probability: Probability;
    score: number;    
    cumulativeSuccessPercent: number;
    //timestamp: number;
    //$key: string;
    $exists: () => boolean;
}