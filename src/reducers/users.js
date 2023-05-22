import {
	RECEIVE_USERS,
	SAVE_QUESTION_ANSWER_TO_USER,
	ADD_POLL_TO_USER
} from '../actions/users';

export function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			};
		case SAVE_QUESTION_ANSWER_TO_USER:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					answers: {
						...state[action.authedUser].answers,
						[action.qid]: action.answer
					}
				}
			};
		case ADD_POLL_TO_USER:
			return {
				...state,
				[action.poll.author]: {
					...state[action.poll.author],
					questions: state[action.poll.author].questions.concat([
						action.poll.id
					])
				}
			};
		default:
			return state;
	}
}
