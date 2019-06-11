import {AUTH_SUCCESS, AUTH_FAILURE} from '../actions/authenticationAction';
const initialState = { user: null }

export const reducer = (state, action) => { 
    state = state || initialState;
    switch(action.type) {
        case AUTH_SUCCESS:
            const user = action.user;
            const userData = {
                email: user.email,
                displayName: user.displayName,
                uid: user.uid
            }
            return {
                ...state,
                user: userData
            }
        case AUTH_FAILURE:
            return {
                ...state,
                user: null
            }
        default:
            break;
    }
    return state;
}