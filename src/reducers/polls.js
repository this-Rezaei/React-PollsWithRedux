import { ADD_POLL, RECEIVE_POLLS } from "../actions/polls";

export default function polls(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls,
            };
            break;
        case ADD_POLL:
           return{
              ...state,
              [action.poll.id]:action.poll
           }
            break;
        default:
            return state;
            break;
    }
}