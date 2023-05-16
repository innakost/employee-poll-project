import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewPoll from '../components/NewPoll';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { MemoryRouter } from 'react-router-dom';

describe('NewPoll', () => {
    // Unit Test No.6
    it('will have Submit button disabled if only one option field is populated', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <NewPoll />
                </Provider>
            </MemoryRouter>
        );

        const submitButton = component.getByText(/Submit/);
        const firstOption = component.getByTestId('option-one');
        fireEvent.change(firstOption, { target: { value: 'Option One' } });
        expect(submitButton).toBeDisabled();
    })

    // Unit Test No.7
    it('will have Submit button enabled if two options specified', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <NewPoll />
                </Provider>
            </MemoryRouter>
        );

        const submitButton = component.getByText(/Submit/);
        const firstOption = component.getByTestId('option-one');
        const secondOption = component.getByTestId('option-two');
        fireEvent.change(firstOption, { target: { value: 'Option One' } });
        fireEvent.change(secondOption, { target: { value: 'Option Two' } });
        expect(submitButton).toBeEnabled();
    })
})