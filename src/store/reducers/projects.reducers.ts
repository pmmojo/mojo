import * as ProjectsActions from '../actions/projects.actions';
import { Project } from "../../projects/models/project.interface";

export type Action = ProjectsActions.All;

export interface State {
    selectedProject: Project;  
    projects:Project[]  
};

const initialState: State = {
    selectedProject: null,
    projects: null
};

export function reducer(state = initialState, action: Action): State {
    console.log('calling project reducer with action',action)    ;
    switch (action.type) {
        case ProjectsActions.GET_PROJECT_SUCCESS: {                        
            console.log('success GET_PROJECT_SUCCESS reducer fired', action.payload);
            return Object.assign({}, state, {
                selectedProject: action.payload
            });
        }
        case ProjectsActions.GET_ALL_PROJECTS_SUCCESS: {                        
            //console.log('success GET_ALL_PROJECTS_SUCCESS reducer fired', action.payload);
            //console.log('action.payload',action.payload);
           // console.log('state',state);
            return Object.assign({}, state, {
                projects: action.payload
            });
        }
        case ProjectsActions.SET_PROJECTS: {                        
           // console.log('success SET_PROJECTS reducer fired', action.payload);
            return Object.assign({}, state, {
                projects: action.payload
            });
        }
       
        default: {
            return state;
        }
    }
}

export const getSelectedProject = (state: State) => state == null ? null : state.selectedProject;