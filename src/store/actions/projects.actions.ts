import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Project } from "../../projects/models/project.interface";

export const GET_PROJECT = '[Projects] Get Project';
export const GET_PROJECT_SUCCESS = '[Projects] Get Project Success';
export const GET_PROJECT_FAIL = '[Projects] Get Project Fail';

export const GET_ALL_PROJECTS = '[Projects] Get All Projects';
export const GET_ALL_PROJECTS_SUCCESS = '[Projects] Get All Projects Success';
export const GET_ALL_PROJECTS_FAIL = '[Projects] Get All Projects Fail';

export const SAVE_PROJECT = '[Projects] Save Project';
export const SAVE_PROJECT_SUCCESS = '[Projects] Save Project Success';
export const SAVE_PROJECT_FAIL = '[Projects] Save Project Fail';

export const SET_PROJECTS = '[Projects] Set Projects';
export const SET_PROJECTS_SUCCESS = '[Projects] Set Projects Success';
export const SET_PROJECTS_FAIL = '[Projects] Set Projects Fail';

export class GetProject implements Action {
    readonly type = GET_PROJECT;
    constructor(public payload: string) {
        console.log('get project fired action',payload);
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

export class SaveProject implements Action {
    readonly type = SAVE_PROJECT;
    constructor(public payload: Project) {
        console.log('Save project fired action',payload);
    }
}

export class SaveProjectSuccess implements Action {
    readonly type = SAVE_PROJECT_SUCCESS;
    constructor() {
        console.log('success Save fired action');
    }
}

export class SaveProjectFailed implements Action {
    readonly type = SAVE_PROJECT_FAIL;
    constructor() {
        console.log('BOOM ERROR Save project');
    }
}

export class SetProjects implements Action {
    readonly type = SET_PROJECTS;
    constructor(public payload: Project) {
        console.log('Save project fired action',payload);
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

export type All
    = GetProject
    | GetProjectSuccess
    | GetProjectFailed
    | GetAllProjects
    | GetAllProjectsSuccess
    | GetAllProjectsFailed
    | SaveProject
    | SaveProjectSuccess
    | SaveProjectFailed
    | SetProjects
    | SetProjectsSuccess
    | SetProjectsFailed;