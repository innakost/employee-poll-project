// import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Nav from './components/Nav';
// import Dashboard from './components/Dashboard';
// import PollPage from './components/PollPage';
import { Footer } from './components/Footer';
import LoadingBar from 'react-redux-loading-bar';
import NewPoll from './components/NewPoll';

function App(props) {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <>
      <LoadingBar />
      {props.loading === true ? null : (
        <>
          <Nav />
          {/* <Dashboard /> */}
          {/* <PollPage match={{
            params: { id: "vthrdm985a262al8qx3do" }
          }} /> */}
          <NewPoll />
          <Footer />
        </>
      )}
    </>
  )
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
