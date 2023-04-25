// import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
// import Dashboard from './components/Dashboard';
// import PollPage from './components/PollPage';
// import NewPoll from './components/NewPoll';
// import Leaderboard from './components/Leaderboard';
// import Nav from './components/Nav';
// import { Footer } from './components/Footer';
// import LoadingBar from 'react-redux-loading-bar';
import LogIn from './components/LogIn';

function App(props) {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <>
      <LogIn />
      {/* <LoadingBar />
      {props.loading === true ? null : (
        <> */}
      {/* <Nav /> */}
      {/* <Dashboard /> */}
      {/* <PollDetails match={{
            params: { id: "vthrdm985a262al8qx3do" }
          }} /> */}
      {/* <NewPoll /> */}
      {/* <Leaderboard /> */}
      {/* <Footer /> */}
    </>
    //   )}
    // </>
  )
}

// const mapStateToProps = ({ authedUser }) => ({
//   loading: authedUser === null,
// });

export default connect()(App);
