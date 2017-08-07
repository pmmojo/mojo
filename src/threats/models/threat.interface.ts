export class Threat {
    title: string;
    impact: number;
    probability: number;
    //timestamp: number;
    //$key: string;
    $exists: () => boolean;
}