import { getInitialData } from "../utils/api";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = 'sarahedo';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({ users, questions }) => {
            dispatch(receivePolls(questions));
            dispatch(receiveUsers(users));
            dispatch(setAuthedUser(AUTHED_ID));
            dispatch(hideLoading());
        })
    }
}