import { connect } from "react-redux";
import Poll from "./Poll";

const Dashboard = ({ newPollsIds, donePollsIds }) => {

    return (
        <div className="3-large">
            <div className="w3-container w3-padding-64">
                <h2 className="w3-center w3-padding-64">
                    <span className="w3-bottombar w3-border-dark-grey w3-padding-16">New Questions</span>
                </h2>

                {newPollsIds &&
                    <div className="w3-row-padding">
                        {newPollsIds.map(id => (
                            <Poll key={id} id={id} />
                        ))}
                    </div>
                }

                <h2 className="w3-center w3-padding-64">
                    <span className="w3-bottombar w3-border-dark-grey w3-padding-16">
                        Done
                    </span>
                </h2>

                {donePollsIds &&
                    <div className="w3-row-padding">
                        {donePollsIds.map(id => (
                            <Poll key={id} id={id} />
                        ))}
                    </div>
                }

            </div>
        </div>
    )
}

const mapStateToProps = ({ polls, authedUser }) => {
    let newPolls = [];
    let donePolls = [];
    Object.values(polls).map(poll =>
        poll.optionOne.votes.includes(authedUser) || poll.optionTwo.votes.includes(authedUser)
            ? donePolls = donePolls.concat(poll)
            : newPolls = newPolls.concat(poll)
    );
    return {
        newPollsIds: newPolls ? newPolls
            .sort((a, b) => (a.timestamp > b.timestamp) ? 1 : ((b.timestamp > a.timestamp) ? -1 : 0))
            .map(poll => poll.id) : null,
        donePollsIds: donePolls ? donePolls
            .sort((a, b) => (a.timestamp > b.timestamp) ? 1 : ((b.timestamp > a.timestamp) ? -1 : 0))
            .map(poll => poll.id) : null,
    }
};

export default connect(mapStateToProps)(Dashboard);