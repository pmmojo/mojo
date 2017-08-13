export enum Impact {
    Catastrophic = 1,
    VeryHigh = 2,
    High = 3,
    Medium = 4,
    Low = 5,
    VeryLow = 6,
    NoImpact = 7
}

export function ImpactLabelByStringId(id: string): string {
    return ImpactLabel(Number(id));
}

export function ImpactLabel(impact: Impact): string {
    switch (impact) {
        case Impact.Catastrophic:
            return "Catastrophic";
        case Impact.VeryHigh:
            return "Very High";
        case Impact.High:
            return "High";
        case Impact.Medium:
            return "Medium";
        case Impact.Low:
            return "Low";
        case Impact.VeryLow:
            return "Very Low";
        case Impact.NoImpact:
            return "No Impact";
        default:
            return "";
    }
}