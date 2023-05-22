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
import PageNotFound from './components/PageNotFound';

function App({ dispatch }) {
	useEffect(() => {
		dispatch(handleInitialData());
	}, [dispatch]);

	return (
		<Fragment>
			<Routes>
				<Route path='/' exact element={<LogIn />} />
				<Route
					path='/dashboard'
					element={
						<RequireAuth>
							<Layout>
								<Dashboard />
							</Layout>
						</RequireAuth>
					}
				/>
				<Route
					path='/leaderboard'
					element={
						<RequireAuth>
							<Layout>
								<Leaderboard />
							</Layout>
						</RequireAuth>
					}
				/>
				<Route
					path='/add'
					element={
						<RequireAuth>
							<Layout>
								<NewPoll />
							</Layout>
						</RequireAuth>
					}
				/>
				<Route
					path='/questions/:id'
					element={
						<RequireAuth>
							<Layout>
								<PollDetails />
							</Layout>
						</RequireAuth>
					}
				/>
				<Route
					path='*'
					element={
						<Layout>
							<PageNotFound />
						</Layout>
					}
				/>
				<Route
					path='/404'
					element={
						<Layout>
							<PageNotFound />
						</Layout>
					}
				/>
			</Routes>
		</Fragment>
	);
}

const mapStateToProps = ({ authedUser, polls, users }) => ({
	// loading: authedUser === null,
	authedUser,
	polls,
	users
});

export default connect(mapStateToProps)(App);
