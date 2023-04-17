import { connect } from "react-redux";
import { savePollAnswer } from "../actions/shared";

const PollPage = ({ dispatch, authedUser, poll, users }) => {

    const handleClick = (e) => {
        e.preventDefault();

        console.log(e.target.name);

        dispatch(savePollAnswer({
            authedUser,
            qid: poll.id,
            answer: e.target.name
        }))

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
                    {/* TODO: convert to Qestion component */}
                    <div className="w3-col s6 w3-margin-bottom">
                        <ul className="w3-ul w3-border w3-center w3-hover-shadow">
                            <li className="w3-dark-grey w3-xlarge w3-padding-32">{poll.optionOne.text}</li>
                            <li className="w3-padding-16">Voted:</li>
                            <li className="w3-padding-16">Percentage:</li>
                            <li className="w3-padding-16">Your answer:</li>
                            <li className="w3-padding-24">
                                <button
                                    className="w3-button w3-light-grey w3-block"
                                    name="optionOne"
                                    onClick={handleClick}
                                    // TODO: make it a function
                                    disabled={poll.optionOne.votes.includes(authedUser) || poll.optionTwo.votes.includes(authedUser)}
                                >
                                    Vote
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w3-col s6 w3-margin-bottom">
                        <ul className="w3-ul w3-border w3-center w3-hover-shadow">
                            <li className="w3-dark-grey w3-xlarge w3-padding-32">{poll.optionTwo.text}</li>
                            <li className="w3-padding-16">Voted:</li>
                            <li className="w3-padding-16">Percentage:</li>
                            <li className="w3-padding-16">Your answer:</li>
                            <li className="w3-padding-24">
                                <button
                                    className="w3-button w3-light-grey w3-block"
                                    name="optionTwo"
                                    onClick={handleClick}
                                    disabled={poll.optionOne.votes.includes(authedUser) || poll.optionTwo.votes.includes(authedUser)}
                                >
                                    Vote
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ authedUser, polls, users }, props) => {
    const { id } = props.match.params;

    return {
        id,
        poll: polls[id],
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(PollPage);