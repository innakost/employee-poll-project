import { connect } from "react-redux";

const Nav = ({ userName, avatar }) => {
    return (
        <div className="w3-bar w3-padding w3-pale-red">
            <a href="/" className="w3-bar-item w3-button">Home</a>
            <a href="/leaderboard" className="w3-bar-item w3-button">Leaderboard</a>
            <a href="/new" className="w3-bar-item w3-button">New</a>
            <a href="/login" className="w3-bar-item w3-button w3-right">Logout</a>
            <div className="w3-bar-item  w3-right">
                <img src={avatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: 30 }} />
                <span>{userName}</span>
            </div>
        </div >
    )
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        userName: authedUser,
        avatar: users[authedUser].avatarURL
    }
};

export default connect(mapStateToProps)(Nav);