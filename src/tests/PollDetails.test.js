import { render, screen } from '@testing-library/react';
import PollDetails from '../components/PollDetails';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import reducer from '../reducers';
import { Provider } from 'react-redux';
import { createStore } from "redux";

describe('PollDetails', () => {
    // Unit Test No.10
    it('will display verify that the percentage of people who voted for an option is calculated and displayed correctly', async () => {
        const users = {
            sarahedo: {
                id: 'sarahedo',
                password: 'password123',
                name: 'Sarah Edo',
                avatarURL: '/avatar/avatar_4.png',
                answers: {
                    "8xf0y6ziyjabvozdd253nd": 'optionOne',
                    "6ni6ok3ym7mf1p33lnez": 'optionOne',
                    "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                    "loxhs1bqm25b708cmbf3g": 'optionTwo'
                },
                questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
            },
            mtsamis: {},
            zoshikanlu: {},
            tylermcginnis: {}

        }
        const polls = {
            "8xf0y6ziyjabvozdd253nd": {
                id: '8xf0y6ziyjabvozdd253nd',
                author: 'sarahedo',
                timestamp: 1467166872634,
                optionOne: {
                    votes: ['sarahedo'],
                    text: 'Build our new application with Javascript',
                },
                optionTwo: {
                    votes: [],
                    text: 'Build our new application with Typescript'
                }
            }
        }

        render(
            <MemoryRouter initialEntries={["/questions/8xf0y6ziyjabvozdd253nd"]} >
                <Routes>
                    <Route path='/questions/:id' element={
                        <Provider store={createStore(reducer, { users, polls, authedUser: 'sarahedo' })}>
                            <PollDetails match={{ params: { id: '8xf0y6ziyjabvozdd253nd' } }} />
                        </Provider>
                    } />
                </Routes>
            </MemoryRouter >
        )

        expect(screen.getByTestId('optionOne-num').textContent).toMatch('Voted: 1');
        expect(screen.getByTestId('optionOne-%').textContent).toMatch('25');
    })
})