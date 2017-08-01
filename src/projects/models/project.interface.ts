import { Threat } from "../../threats/models/threat.interface";

export class Project {
    $key:string;
    title:string; 
    timestamp: number;    
    $exists: () => boolean;
    
    threats: Threat[]
}