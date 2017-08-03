import { Threat } from "../../threats/models/threat.interface";

export class Project {
    constructor() {
        this.threats = new Array<Threat>();
    }

    $key: string;
    title: string;
    timestamp: number;
    $exists: () => boolean;

    threats: Threat[]
}