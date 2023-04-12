// import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import { Footer } from './components/Footer';
import LoadingBar from 'react-redux-loading-bar';

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
          <Dashboard />
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
