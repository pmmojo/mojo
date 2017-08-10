export enum Probability {
    Certain = 1,
    AlmostCertain = 2,
    Likely = 3,
    Unlikely = 4,
    AlmostImpossible = 5,
    Impossible = 6,
}

export function ProbabilityLabel(probability: Probability): string {
    switch (probability) {
        case Probability.Certain:
            return "Certain";
        case Probability.AlmostCertain:
            return "Almost Certain";
        case Probability.Likely:
            return "Likely";
        case Probability.Unlikely:
            return "Unlikely";
        case Probability.AlmostImpossible:
            return "Almost Impossible";
        case Probability.Impossible:
            return "Impossible";
        default:
            return "";
    }
}