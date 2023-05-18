import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

const Nav = ({ dispatch, userName, avatar }) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(setAuthedUser(null));

		navigate('/');
	};

	return (
		<div className='w3-bar w3-padding w3-pale-red'>
			{userName ? (
				<>
					<Link to='/dashboard' className='w3-bar-item w3-button'>
						Home
					</Link>
					<Link to='/leaderboard' className='w3-bar-item w3-button'>
						Leaderboard
					</Link>
					<Link to='/add' className='w3-bar-item w3-button'>
						New
					</Link>
					<div
						className='w3-bar-item w3-button w3-right'
						onClick={handleLogout}
					>
						Logout
					</div>
					<div className='w3-bar-item  w3-right'>
						<img
							src={avatar}
							alt='Avatar'
							className='w3-left w3-circle w3-margin-right'
							style={{ width: 30 }}
						/>
						<span>{userName}</span>
					</div>
				</>
			) : (
				<Link to='/' className='w3-bar-item w3-button w3-right'>
					Login
				</Link>
			)}
		</div>
	);
};

const mapStateToProps = ({ authedUser, users }) => {
	return {
		userName: authedUser,
		avatar: users[authedUser]?.avatarURL
	};
};

export default connect(mapStateToProps)(Nav);
