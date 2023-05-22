import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { receivePolls, saveAnswerToPoll, addPoll } from './polls';
import { receiveUsers, saveAnswerToUser, addPollToUser } from './users';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestion } from '../utils/api';

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(receivePolls(questions));
			dispatch(receiveUsers(users));
			dispatch(hideLoading());
		});
	};
}

export function savePollAnswer(info) {
	return (dispatch) => {
		dispatch(showLoading());

		return saveQuestionAnswer(info)
			.then((result) => {
				if (result) {
					dispatch(saveAnswerToPoll(info));
					dispatch(saveAnswerToUser(info));
				}
			})
			.catch((e) => {
				console.warn('Error in saveQuestionAnswer:', e);
				alert('There was an error in answering a question. Try again.');
			})
			.finally(() => dispatch(hideLoading()));
	};
}

export function savePoll({ optionOneText, optionTwoText }) {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		dispatch(showLoading());
		console.log(optionOneText, optionTwoText, authedUser);
		return saveQuestion({
			optionOneText,
			optionTwoText,
			author: authedUser
		})
			.then((poll) => {
				dispatch(addPoll(poll));
				dispatch(addPollToUser(poll));
			})
			.then(() => dispatch(hideLoading()));
	};
}
