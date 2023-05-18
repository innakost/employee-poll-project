import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from '../reducers';
import { store } from '../app/store';

describe('Nav', () => {
	// Unit Test No.8
	it('will verify the navigation bar displays all expected links if authedUser', () => {
		render(
			<MemoryRouter>
				<Provider store={createStore(reducer, { authedUser: 'mtsamis' })}>
					<Nav />
				</Provider>
			</MemoryRouter>
		);
		expect(screen.getByText(/Home/i)).toBeInTheDocument();
		expect(screen.getByText(/Leaderboard/i)).toBeInTheDocument();
		expect(screen.getByText(/New/i)).toBeInTheDocument();
		expect(screen.getByText(/Logout/i)).toBeInTheDocument();
	});

	// Unit Test No.9
	it('will display only Login link if user is not authedUser', () => {
		render(
			<MemoryRouter>
				<Provider store={store}>
					<Nav />
				</Provider>
			</MemoryRouter>
		);
		expect(screen.getByText(/Login/i)).toBeInTheDocument();
	});
});
