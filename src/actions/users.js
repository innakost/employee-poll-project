export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_QUESTION_ANSWER_TO_USER = 'SAVE_QUESTION_ANSWER_TO_USER';
export const ADD_POLL_TO_USER = 'ADD_POLL_TO_USER';

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	};
}

export function saveAnswerToUser({ authedUser, qid, answer }) {
	return {
		type: SAVE_QUESTION_ANSWER_TO_USER,
		authedUser,
		qid,
		answer
	};
}

export function addPollToUser(poll) {
	return {
		type: ADD_POLL_TO_USER,
		poll
	};
}
