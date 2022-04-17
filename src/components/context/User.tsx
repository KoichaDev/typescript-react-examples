import { useContext } from 'react';
import { UserContext } from '@/components/context/UserContextProvider';
const User = () => {
	const userCtx = useContext(UserContext);

	const loginHandler = () => {
		userCtx.setUser({
			name: 'James Bond',
			email: 'jamesbond@gmail.com',
		});
	};
	const logoutHandler = () => {
		userCtx.setUser(null);
	};

	return (
		<>
			<button type='button' onClick={loginHandler}>
				Login
			</button>
			<button type='button' onClick={logoutHandler}>
				Logout
			</button>
			<p>User name is: {userCtx.user?.name}</p>
			<p>User email is: {userCtx.user?.email} </p>
		</>
	);
};

export default User;
