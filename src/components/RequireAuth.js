import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children, authedUser }) => {
    const location = useLocation();

    return authedUser ? children : <Navigate to="/" replace state={{ path: location.pathname }} />
}

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(RequireAuth);