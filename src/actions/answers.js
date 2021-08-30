import { hideLoading, showLoading } from "react-redux-loading-bar";
import { savePollAnswer } from "../utils/api";
export const ADD_ANSWER = "ADD_ANSWER";

export function addAnswer({ authedUser, id, answer }) {
    return {
        type: ADD_ANSWER,
        authedUser,
        id,
        answer,
    };
}

export function handleAnswer(answerData) {
    return (dispatch) => {
        dispatch(showLoading());
        savePollAnswer(answerData)
            .then(() => dispatch(addAnswer(answerData)))
            .then(() => dispatch(hideLoading()));
    };
}
