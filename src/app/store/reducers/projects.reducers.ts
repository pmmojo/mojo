import * as ProjectsActions from '../actions/projects.actions';
import { Project } from "../../projects/models/project.interface";

export type Action = ProjectsActions.All;

export interface State {
    selectedProject: Project;    
};

const initialState: State = {
    selectedProject: null
};

export function reducer(state = initialState, action: Action): State {    
    switch (action.type) {
        case ProjectsActions.GET_PROJECT_SUCCESS: {                        
            console.log('success GET_PROJECT_SUCCESS reducer fired', action.payload);
            return Object.assign({}, state, {
                selectedProject: action.payload
            });
        }
       
        default: {
            return state;
        }
    }
}

export const getSelectedProject = (state: State) => state == null ? null : state.selectedProject;