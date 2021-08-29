import { hideLoading, showLoading } from "react-redux-loading-bar";
import { savePoll } from "../utils/api";
export const ADD_POLL = "ADD_POLL";
export const RECEIVE_POLLS = "RECEIVE_POLLS";

function addpoll(poll) {
    return {
        type: ADD_POLL,
        poll,
    };
}
export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls,
    };
}

export function handleAddPoll(poll) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());

        return savePoll({
            ...poll,
            author: authedUser,
        })
            .then((poll) => dispatch(addpoll(poll)))
            .then(() => dispatch(hideLoading()));
    };
}
