import { render } from "@testing-library/react";
import * as React from 'react';
import LogIn from "../components/LogIn";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { MemoryRouter } from 'react-router-dom';

describe('LogIn', () => {
    // Unit Test No.5
    it('will match snapshot', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <LogIn />
                </Provider>
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    })
})