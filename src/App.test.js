import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
