import {
	ADD_POLL,
	RECEIVE_POLLS,
	SAVE_QUESTION_ANSWER_TO_POLL
} from '../actions/polls';

export function polls(state = {}, action) {
	switch (action.type) {
		case RECEIVE_POLLS:
			return {
				...state,
				...action.polls
			};
		case SAVE_QUESTION_ANSWER_TO_POLL:
			return {
				...state,
				[action.qid]: {
					...state[action.qid],
					[action.answer]: {
						...state[action.qid][action.answer],
						votes: state[action.qid][action.answer].votes.concat(
							action.authedUser
						)
					}
				}
			};
		case ADD_POLL:
			return {
				...state,
				[action.poll.id]: action.poll
			};
		default:
			return state;
	}
}
