import authedUser from "./authedUser";
import users from "./users";
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
export default combineReducers({
    authedUser,
    users,
    loadingBar: loadingBarReducer,
});
