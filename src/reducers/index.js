import authedUser from "./authedUser";
import users from "./users";
import { combineReducers } from "redux";
export default combineReducers({
    authedUser,
    users,
});
