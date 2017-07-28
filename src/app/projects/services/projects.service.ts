
import { Injectable } from '@angular/core';
import {  Response } from '@angular/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import { AuthenticationToken } from "app/authentication-token";
//import { User } from "app/users/models/user.interface";
import { Project } from "../models/project.interface";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProjectsService {
    private _url: string = `${environment.baseApiUrl}Authentication/`;

    constructor(private http: HttpClient) {
    }

    get(id: number): Observable<Project> {
        return this.http.post(`${this._url}Projects`, { id })
            .map((response: Response) => {
                let project = new Project();
                project.title = "Project title";
                project.id = id;
                return project;
            });
    }
}