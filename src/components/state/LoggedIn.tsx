import { useState } from 'react';

const LoggedIn = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginHandler = () => {
		setIsLoggedIn(true);
	};
	const logoutHandler = () => {
		setIsLoggedIn(false);
	};

	return (
		<div>
			<button type='button' onClick={loginHandler}>
				Login
			</button>
			<button type='button' onClick={logoutHandler}>
				Logout
			</button>

			<p>User is {isLoggedIn ? 'Logged in' : 'logged out'}</p>
		</div>
	);
};

export default LoggedIn;
