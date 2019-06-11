import {AUTH_SUCCESS, AUTH_FAILURE} from '../actions/authenticationAction';
const initialState = { user: null }

export const reducer = (state, action) => { 
    state = state || initialState;
    switch(action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                user: action.user
            }
        case AUTH_FAILURE:
            return {
                ...state,
                user: null
            }
    }
    return state;
}