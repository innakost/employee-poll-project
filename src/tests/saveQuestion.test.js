import { _saveQuestion } from '../utils/_DATA';

describe('_saveQuestion', () => {
	// Unit Test No.1
	it('will return saved question and all expected fields are populated when correctly formatted data is passed', async () => {
		const mockQuestion = {
			id: '8xf0y6ziyjabvozdd253nd',
			author: 'sarahedo',
			timestamp: 1467166872634,
			optionOne: {
				votes: [],
				text: 'Option 1'
			},
			optionTwo: {
				votes: [],
				text: 'Option 2'
			}
		};
		const result = await _saveQuestion({
			optionOneText: 'Option 1',
			optionTwoText: 'Option 2',
			author: 'sarahedo'
		});
		expect(result.id).toBeDefined();
		expect(result.timestamp).toBeDefined();
		expect(result.author).toEqual(mockQuestion.author);
		expect(result.optionOne.text).toEqual(mockQuestion.optionOne.text);
		expect(result.optionTwo.text).toEqual(mockQuestion.optionTwo.text);
	});

	// Unit Test No.2
	it('will return an error if incorrect data is passed to the function', async () => {
		const incorrectQuestion = { optionOneText: 'Option 1' };
		await expect(_saveQuestion(incorrectQuestion)).rejects.toEqual(
			'Please provide optionOneText, optionTwoText, and author'
		);
	});
});
