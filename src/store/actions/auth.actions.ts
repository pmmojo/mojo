import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Project } from "../../projects/models/project.interface";
import { UserCredentials } from "../../auth/shared/models/user-credentials.interface";
import { User } from "../../auth/shared/services/auth/auth.service";

export const SET_LOGGED_IN_USER = '[Auth] Set logged in user';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';

export const LOGOUT = '[Auth] Logout';
export const LOGOUT_SUCCESS = '[Auth] Logout Success';
export const LOGOUT_FAIL = '[Auth] Logout Fail';

export const REGISTER = '[Register] Login';
export const REGISTER_SUCCESS = '[Register] Login Success';
export const REGISTER_FAIL = '[Register] Login Fail';

export class SetLoggedInUser implements Action {
    readonly type = SET_LOGGED_IN_USER;
    constructor(public payload: User) {
     //   console.log('SET_LOGGED_IN_USER fired action', payload);
    }
}

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: UserCredentials) {
    }
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor() {
       // console.log('LOGIN_SUCCESS');
    }
}

export class LoginFailed implements Action {
    readonly type = LOGIN_FAIL;
    constructor() {
      //  console.log('LOGIN_FAIL');
    }
}

export class Logout implements Action {
    readonly type = LOGOUT;    
}

export class LogoutSuccess implements Action {
    readonly type = LOGOUT_SUCCESS;
}

export class LogoutFailed implements Action {
    readonly type = LOGOUT_FAIL;
    constructor() {
        console.log('LOGOUT_FAIL');
    }
}

export class Register implements Action {
    readonly type = REGISTER;
    constructor(public payload: UserCredentials) { }
}

export class RegisterSuccess implements Action {
    readonly type = REGISTER_SUCCESS;
    constructor() { }
}

export class RegisterFailed implements Action {
    readonly type = REGISTER_FAIL;
    constructor() {
        console.log('REGISTER_FAIL');
    }
}

export type All
    = SetLoggedInUser
    | Login
    | LoginSuccess
    | LoginFailed
    | Logout
    | LogoutSuccess
    | LogoutFailed
    | Register
    | RegisterFailed
    | RegisterSuccess;