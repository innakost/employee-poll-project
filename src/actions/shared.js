import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { receivePolls, saveAnswerToPoll } from './polls';
import { receiveUsers, saveAnswerToUser } from './users';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

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
