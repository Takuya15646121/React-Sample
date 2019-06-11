import { TAB_CHANGE } from '../actions/applicationAction';
const initialState = { isLoading: false, tabNumber: 0 }

export const reducer = (state, action) => { 
    state = state || initialState;
    switch(action.type) {
        case TAB_CHANGE:
            return {
                ...state,
                tabNumber: action.value
            }
    }
    return state;
}