import { connect } from 'react-redux';
import { useState } from 'react';
import Poll from './Poll';

const Dashboard = ({ newPollsIds, donePollsIds, loading }) => {
	const [tab, setTab] = useState('new');

	return (
		<>
			{loading === true ? null : (
				<div className='w3-large' style={{ minHeight: 'calc(100vh - 221px)' }}>
					<div className='w3-container w3-padding-64'>
						<div className='w3-bar w3-black'>
							{/* Tabs */}
							<button
								className={
									tab === 'new'
										? 'w3-bar-item w3-button w3-red'
										: 'w3-bar-item w3-button'
								}
								onClick={() => setTab('new')}
							>
								New Questions
							</button>
							<button
								className={
									tab === 'answered'
										? 'w3-bar-item w3-button w3-red'
										: 'w3-bar-item w3-button'
								}
								onClick={() => setTab('answered')}
							>
								Answered Questions
							</button>
						</div>
						<div style={{ display: tab === 'new' ? 'block' : 'none' }}>
							<h2 className='w3-center w3-padding-64'>
								<span className='w3-bottombar w3-border-dark-grey w3-padding-16'>
									New Questions
								</span>
							</h2>
							{newPollsIds && (
								<div className='w3-row-padding'>
									{newPollsIds.map((id) => (
										<Poll key={id} id={id} />
									))}
								</div>
							)}
						</div>
						<div style={{ display: tab === 'answered' ? 'block' : 'none' }}>
							<h2 className='w3-center w3-padding-64'>
								<span className='w3-bottombar w3-border-dark-grey w3-padding-16'>
									Answered Questions
								</span>
							</h2>
							{donePollsIds && (
								<div className='w3-row-padding'>
									{donePollsIds.map((id) => (
										<Poll key={id} id={id} />
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

const mapStateToProps = ({ polls, authedUser }) => {
	let newPolls = [];
	let donePolls = [];
	Object.values(polls).map((poll) =>
		poll.optionOne.votes.includes(authedUser) ||
		poll.optionTwo.votes.includes(authedUser)
			? (donePolls = donePolls.concat(poll))
			: (newPolls = newPolls.concat(poll))
	);
	return {
		newPollsIds: newPolls
			? newPolls
					.sort((a, b) => b.timestamp - a.timestamp)
					.map((poll) => poll.id)
			: null,
		donePollsIds: donePolls
			? donePolls
					.sort((a, b) => b.timestamp - a.timestamp)
					.map((poll) => poll.id)
			: null,
		loading: authedUser === null
	};
};

export default connect(mapStateToProps)(Dashboard);
