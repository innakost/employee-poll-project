const Option = ({ option, authedUser, users, handleClick, hasVoted, name }) => {
	const votedPercentage = () => {
		const usersVoted = option.votes.length;
		const usersNumber = Object.keys(users).length;
		return (100 * usersVoted) / usersNumber;
	};

	const userAnswered = () => (option.votes.includes(authedUser) ? true : false);

	return (
		<div className='w3-col s6 w3-margin-bottom'>
			<ul className='w3-ul w3-border w3-center w3-hover-shadow'>
				<li className='w3-dark-grey w3-xlarge w3-padding-32'>{option.text}</li>
				<li
					className='w3-padding-16'
					data-testid={`${name}-num`}
				>{`Voted: ${option.votes.length}`}</li>
				<li className='w3-padding-16'>
					{' '}
					Voted(%):
					<div className='w3-light-grey'>
						<div
							className='w3-green'
							style={{ width: `${votedPercentage()}%` }}
							data-testid={`${name}-%`}
						>
							{votedPercentage()}%
						</div>
					</div>
				</li>
				<li className='w3-padding-16'>{`Your answer: ${
					userAnswered(option) ? '✔' : ''
				} `}</li>
				<li className='w3-padding-24'>
					<button
						className='w3-button w3-light-grey w3-block'
						name={name}
						onClick={handleClick}
						disabled={hasVoted()}
					>
						Vote
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Option;
