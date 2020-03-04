import {SETAUTHUSER} from '../actions/authedUser'

export default function authedUser(state = null, action) {
    switch(action.type) {

        case SETAUTHUSER:
            return action.id;
        default:
            return state


    }

}