import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";

const Poll = ({ poll }) => {

    const goToPollContainer = (e) => {
        e.preventDefault();

        // TODO: Redirect to Poll Container
    }

    return (
        <div className="w3-third w3-margin-bottom">
            <div className="w3-card-4">
                <div className="w3-container">
                    <h3 className="w3-center">{poll.author}</h3>
                    <p className="w3-opacity w3-center">{formatDate(poll.timestamp)}</p>
                    <hr />
                    <p><button
                        className="w3-button w3-light-grey w3-block"
                        onClick={(e) => goToPollContainer(e)}
                    >Show</button></p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ polls }, { id }) => {
    const poll = polls[id];

    return {
        poll
    }
}

export default connect(mapStateToProps)(Poll);
