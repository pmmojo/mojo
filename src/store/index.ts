import { createSelector } from 'reselect';
import { ActionReducerMap, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
// import { environment } from '../../../environments/environment';

import * as fromProjects from './reducers/projects.reducers';
import * as fromAuth from './reducers/auth.reducers';

export interface State {
    projects: fromProjects.State;
    auth: fromAuth.State;
    router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
    projects: fromProjects.reducer,
    auth: fromAuth.reducer,
    router: fromRouter.routerReducer,
};

// const developmentReducer: ActionReducerMap<any> = compose(storeFreeze, combineReducers)(reducers);
// const productionReducer: ActionReducerMap<any> = combineReducers(reducers);

// export function reducer(state: any, action: any) {
//     console.log('INDEX REDUCER');
//   if (environment.production) {
//       console.log('prod');
//     return productionReducer(state, action);
//   } else {
//       console.log('NOT prod');
//     return developmentReducer(state, action);
//   }
// }

 export const getSelectedProject = (state: State) => state.projects.selectedProject;
 export const getAllProjects = (state: State) => state.projects.projects;

 export const getAuthState = (state: State) => state.auth;
export const getAuthenticatedUsed = createSelector(getAuthState, fromAuth.getLoggedInUser);