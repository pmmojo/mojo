import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Project } from "../../projects/models/project.interface";

export const GET_PROJECT = '[Projects] Get Project';
export const GET_PROJECT_SUCCESS = '[Projects] Get Project Success';
export const GET_PROJECT_FAIL = '[Projects] Get Project Fail';

export class GetProject implements Action {
    readonly type = GET_PROJECT;
    constructor(public payload: number) {
        console.log('get project fired action',payload);
    }
}

export class GetProjectSuccess implements Action {
    readonly type = GET_PROJECT_SUCCESS;
    constructor(public payload: Project) {
        console.log('success login fired action',payload);
    }
}

export class GetProjectFailed implements Action {
    readonly type = GET_PROJECT_FAIL;
    constructor() {
        console.log('BOOM ERROR get project');
    }
}

export type All
    = GetProject
    | GetProjectSuccess
    | GetProjectFailed;