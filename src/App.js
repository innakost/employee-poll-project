import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Dashboard from './components/Dashboard';
import PollDetails from './components/PollDetails';
import NewPoll from './components/NewPoll';
import Leaderboard from './components/Leaderboard';
import LogIn from './components/LogIn';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';

function App(props) {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <Fragment>
      <Routes>
        <Route path='/' exact element={<LogIn />} />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Layout>
              <Dashboard />
            </Layout>
          </RequireAuth>
        } />
        <Route path='/leaderboard' element={
          <RequireAuth>
            <Layout>
              <Leaderboard />
            </Layout>
          </RequireAuth>
        } />
        <Route path='/add' element={
          <RequireAuth>
            <Layout>
              <NewPoll />
            </Layout>
          </RequireAuth>
        } />
        <Route path='/questions/:id' element={
          <RequireAuth>
            <Layout>
              <PollDetails />
            </Layout>
          </RequireAuth>
        } />
      </Routes>
    </Fragment>
  )
}

// const mapStateToProps = ({authedUser}) => ({
//   loading: authedUser === null,
// });

export default connect()(App);
