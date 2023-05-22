import { useState } from 'react';
import { connect } from 'react-redux';
import { savePoll } from '../actions/shared';
import { useNavigate } from 'react-router-dom';

const NewPoll = ({ dispatch }) => {
	const navigate = useNavigate();

	const [poll, setPoll] = useState({
		optionOneText: '',
		optionTwoText: ''
	});

	const handleChange = (e) => {
		setPoll({
			...poll,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(savePoll(poll));

		setPoll({
			optionOneText: '',
			optionTwoText: ''
		});

		navigate('/dashboard');
	};

	return (
		<div className='w3-large' style={{ height: 'calc(100vh - 221px)' }}>
			<div className='w3-container w3-padding-64'>
				<h2 className='w3-center w3-padding-64'>
					<span className='w3-bottombar w3-border-dark-grey w3-padding-16'>
						Would You Rather
					</span>
				</h2>
				<div className='w3-center'>
					<p>Create Your Own Poll</p>
				</div>
				<form className='w3-container' onSubmit={handleSubmit}>
					<div className='w3-section'>
						<label>First Option</label>
						<input
							data-testid='option-one'
							style={{ width: '100%' }}
							className='w3-input w3-border w3-hover-border-black'
							type='text'
							name='optionOneText'
							value={poll.optionOneText}
							onChange={handleChange}
							maxLength={280}
							required
						/>
					</div>
					<div className='w3-section'>
						<label>Second Option</label>
						<input
							data-testid='option-two'
							style={{ width: '100%' }}
							className='w3-input w3-border w3-hover-border-black'
							type='text'
							name='optionTwoText'
							value={poll.optionTwoText}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='w3-center'>
						<button
							type='submit'
							className='w3-button w3-black'
							disabled={poll.optionOneText === '' || poll.optionTwoText === ''}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default connect()(NewPoll);
