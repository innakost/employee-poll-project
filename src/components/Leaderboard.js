import { connect } from 'react-redux';

const Leaderboard = ({ users }) => {
	const sortedUsers = Object.values(users).sort((a, b) => {
		return Object.keys(a.answers).length + Object.keys(a.questions).length >
			Object.keys(b.answers).length + Object.keys(b.questions).length
			? -1
			: 1;
	});

	console.log('sorted:', sortedUsers);

	return (
		<div className='w3-large' style={{ height: 'calc(100vh - 221px)' }}>
			<div className='w3-container w3-padding-64'>
				<h2 className='w3-center w3-padding-64'>
					<span className='w3-bottombar w3-border-dark-grey w3-padding-16'>
						Who's leading
					</span>
				</h2>
				<table className='w3-table-all'>
					<thead>
						<tr className='w3-dark-grey'>
							<th>Users</th>
							<th>Answered</th>
							<th>Created</th>
						</tr>
					</thead>
					<tbody>
						{sortedUsers.map((user) => (
							<tr key={user.id}>
								<td>
									<div className='w3-bar'>
										<img
											alt='avatar'
											src={user.avatarURL}
											className='w3-bar-item w3-circle'
											style={{ width: 85 }}
										/>
										<div className='w3-bar-item'>
											<span className='w3-large'>{user.name}</span>
											<br />
											<span>{user.id}</span>
										</div>
									</div>
								</td>
								<td style={{ verticalAlign: 'middle' }}>
									{Object.keys(user.answers).length}
								</td>
								<td style={{ verticalAlign: 'middle' }}>
									{user.questions.length}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(Leaderboard);
