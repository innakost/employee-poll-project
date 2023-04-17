export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const SAVE_QUESTION_ANSWER_TO_POLL = 'SAVE_QUESTION_ANSWER_TO_POLL';

export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

export function saveAnswerToPoll({ authedUser, qid, answer }) {
    return {
        type: SAVE_QUESTION_ANSWER_TO_POLL,
        authedUser,
        qid,
        answer
    }
}

// export function handleSavePollAnswer(info) {
//     return (dispatch) => {
//         // add answer to our state
//         dispatch(saveAnswerToPoll(info));

//         // save to database
//         return saveQuestionAnswer(info).catch((e) => {
//             console.warn("Error in saveAnswerToPoll:", e);
//             dispatch(saveAnswerToPoll(info));
//             alert("There was an error in answering a question. Try again.");
//         })
//     }
// }

