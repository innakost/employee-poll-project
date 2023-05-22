// import { showLoading, hideLoading } from 'react-redux-loading-bar';
// import { saveQuestion } from '../utils/api';

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const SAVE_QUESTION_ANSWER_TO_POLL = 'SAVE_QUESTION_ANSWER_TO_POLL';
export const ADD_POLL = 'ADD_POLL';

export function receivePolls(polls) {
	return {
		type: RECEIVE_POLLS,
		polls
	};
}

export function saveAnswerToPoll({ authedUser, qid, answer }) {
	return {
		type: SAVE_QUESTION_ANSWER_TO_POLL,
		authedUser,
		qid,
		answer
	};
}

export function addPoll(poll) {
	return {
		type: ADD_POLL,
		poll
	};
}

// export function handleAddPoll({ optionOneText, optionTwoText }) {
// 	return (dispatch, getState) => {
// 		const { authedUser } = getState();

// 		dispatch(showLoading());
// 		console.log(optionOneText, optionTwoText, authedUser);
// 		return saveQuestion({
// 			optionOneText,
// 			optionTwoText,
// 			author: authedUser
// 		})
// 			.then((poll) => dispatch(addPoll(poll)))
// 			.then(() => dispatch(hideLoading()));
// 	};
// }
