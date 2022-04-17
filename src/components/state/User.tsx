import { useState } from 'react';

type AuthUser = {
	name: string | null;
	email: string | null;
};

const User = () => {
	// By writing {] as AuthUser is like lying to the TypeScript that the empty object is of type AuthUser
	// If you are confident that user will be initalized soon after setup and will always have a value after
	// you can use type assertion. If not, then it's better to leave it like:
	// const [user, setUser] = useState<AuthUser | null>(null);

	const [user, setUser] = useState<AuthUser>({} as AuthUser);

	const loginHandler = () => {
		setUser({
			name: 'James Bond',
			email: 'jamesbond@gmail.com',
		});
	};
	const logoutHandler = () => {
		setUser({
			name: null,
			email: null,
		});
	};

	return (
		<div>
			<button type='button' onClick={loginHandler}>
				Login
			</button>
			<button type='button' onClick={logoutHandler}>
				Logout
			</button>

			<p>Username is {user.name}</p>
			<p>User email is {user.email} </p>
		</div>
	);
};

export default User;
