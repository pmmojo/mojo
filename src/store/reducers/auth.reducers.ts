import * as AuthActions from '../actions/auth.actions';
import { User } from "../../auth/shared/services/auth/auth.service";

export type Action = AuthActions.All;

export interface State {
    loggedInUser: User;    
};

const initialState: State = {
    loggedInUser: null
};

export function reducer(state = initialState, action: Action): State {    
    switch (action.type) {          
         case AuthActions.SET_LOGGED_IN_USER: {     
              //     console.log('REDUCER AuthActions.SET_LOGGED_IN_USER')                                     
            return Object.assign({}, state, {
                loggedInUser: action.payload
            });
        }               
        default: {
            return state;
        }
    }    
}

export const getLoggedInUser = (state: State) => state == null ? null : state.loggedInUser;