import { connect } from "react-redux";
import { savePollAnswer } from "../actions/shared";
import Option from "./Option";

const PollPage = ({ dispatch, authedUser, poll, users }) => {

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(savePollAnswer({
            authedUser,
            qid: poll.id,
            answer: e.target.name
        }))

    }

    const hasVoted = () => {
        return poll.optionOne.votes.includes(authedUser) || poll.optionTwo.votes.includes(authedUser)
            ? true
            : false
    }

    return (
        <div className="w3-large">
            <div className="w3-container w3-padding-64">
                <h2 className="w3-center w3-padding-64">
                    <span className="w3-bottombar w3-border-dark-grey w3-padding-16">Poll by {poll.author}</span>
                </h2>
                <div className="w3-center">
                    <img src={users[poll.author].avatarURL} alt="Avatar" className="w3-circle" style={{ width: 250 }} />
                    <p>Please shoose your answer for the folloving ↓</p>
                </div>
                <div className="w3-row-padding">
                    <div className="w3-center w3-padding-64">
                        <h3>Would You Rather</h3>
                    </div>
                    <Option option={poll.optionOne} authedUser={authedUser} users={users} handleClick={handleClick} hasVoted={hasVoted} name="optionOne" />
                    <Option option={poll.optionTwo} authedUser={authedUser} users={users} handleClick={handleClick} hasVoted={hasVoted} name="optionTwo" />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ authedUser, polls, users }, props) => {
    const { id } = props.match.params;

    return {
        id,
        // poll: formatPoll(polls[id], users[poll.author]),
        poll: polls[id],
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(PollPage);