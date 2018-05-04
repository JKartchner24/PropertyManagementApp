import { FETCH_NEWSLETTER_ARCHIVE } from '../actions/types';

export default function(state = {}, actions) {
    switch(actions.type) {
        case FETCH_NEWSLETTER_ARCHIVE:
            return {...state, archive: action.payload }
        default: return state;
    }
}