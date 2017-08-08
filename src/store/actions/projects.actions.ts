import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Project } from "../../projects/models/project.interface";
import { Threat } from "../../threats/models/threat.interface";

export const GET_PROJECT = '[Projects] Get Project';
export const GET_PROJECT_SUCCESS = '[Projects] Get Project Success';
export const GET_PROJECT_FAIL = '[Projects] Get Project Fail';

export const GET_ALL_PROJECTS = '[Projects] Get All Projects';
export const GET_ALL_PROJECTS_SUCCESS = '[Projects] Get All Projects Success';
export const GET_ALL_PROJECTS_FAIL = '[Projects] Get All Projects Fail';

export const CREATE_PROJECT = '[Projects] Create Project';
export const CREATE_PROJECT_SUCCESS = '[Projects] Create Project Success';
export const CREATE_PROJECT_FAIL = '[Projects] Create Project Fail';

export const UPDATE_PROJECT = '[Projects] Update Project';
export const UPDATE_PROJECT_SUCCESS = '[Projects] Update Project Success';
export const UPDATE_PROJECT_FAIL = '[Projects] Update Project Fail';

export const SET_PROJECTS = '[Projects] Set Projects';
export const SET_PROJECTS_SUCCESS = '[Projects] Set Projects Success';
export const SET_PROJECTS_FAIL = '[Projects] Set Projects Fail';

export const ADD_THREAT_TO_SELECTED_PROJECT = '[Project Threat] Add Threat To Selected Project';

export class GetProject implements Action {
    readonly type = GET_PROJECT;
    constructor(public payload: string) {
        console.log('get project fired action', payload);
    }
}

export class GetProjectSuccess implements Action {
    readonly type = GET_PROJECT_SUCCESS;
    constructor(public payload: Project) {
        //  console.log('success login fired action',payload);
    }
}

export class GetProjectFailed implements Action {
    readonly type = GET_PROJECT_FAIL;
    constructor(error) {
        // console.log('BOOM ERROR get project', error);
    }
}

export class GetAllProjects implements Action {
    readonly type = GET_ALL_PROJECTS;
    constructor() {
        // console.log('GET_ALL_PROJECTS fired action');
    }

}

export class GetAllProjectsSuccess implements Action {
    readonly type = GET_ALL_PROJECTS_SUCCESS;
    constructor(public payload: Project[]) {
        //   console.log('success GET_ALL_PROJECTS_SUCCESS fired action', payload);
    }
}

export class GetAllProjectsFailed implements Action {
    readonly type = GET_ALL_PROJECTS_FAIL;
    constructor() {
        // console.log('BOOM ERROR get project');
    }
}

export class CreateProject implements Action {
    readonly type = CREATE_PROJECT;
    constructor(public payload: Project) {
        console.log('cREATE project fired action', payload);
    }
}

export class CreateProjectSuccess implements Action {
    readonly type = CREATE_PROJECT_SUCCESS;
    constructor() {
        console.log('success cREATE fired action');
    }
}

export class CreateProjectFailed implements Action {
    readonly type = CREATE_PROJECT_FAIL;
    constructor() {
        console.log('BOOM ERROR cREATE project');
    }
}

export class UpdateProject implements Action {
    readonly type = UPDATE_PROJECT;
    constructor(public payload) {
        console.log('UPDATE project fired action', payload);
    }
}

export class UpdateProjectSuccess implements Action {
    readonly type = UPDATE_PROJECT_SUCCESS;
    constructor() {
        console.log('success UPDATE fired action');
    }
}

export class UpdateProjectFailed implements Action {
    readonly type = UPDATE_PROJECT_FAIL;
    constructor() {
        console.log('BOOM ERROR UPDATE project');
    }
}

export class SetProjects implements Action {
    readonly type = SET_PROJECTS;
    constructor(public payload: Project) {
        console.log('Save project fired action', payload);
    }
}

export class SetProjectsSuccess implements Action {
    readonly type = SET_PROJECTS_SUCCESS;
    constructor() {
        console.log('success Save fired action');
    }
}

export class SetProjectsFailed implements Action {
    readonly type = SET_PROJECTS_FAIL;
    constructor() {
        console.log('BOOM ERROR Save project');
    }
}

export class AddThreatToSelectedProject implements Action {
    readonly type = ADD_THREAT_TO_SELECTED_PROJECT;
    constructor(public payload: Threat) {
        console.log('Save project fired action', payload);
    }
}

export type All
    = GetProject
    | GetProjectSuccess
    | GetProjectFailed
    | GetAllProjects
    | GetAllProjectsSuccess
    | GetAllProjectsFailed
    | CreateProject
    | CreateProjectSuccess
    | CreateProjectFailed
    | UpdateProject
    | UpdateProjectSuccess
    | UpdateProjectFailed
    | SetProjects
    | SetProjectsSuccess
    | SetProjectsFailed
    | AddThreatToSelectedProject;