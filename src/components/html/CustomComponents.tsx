import React from 'react';
import Greetings from '../Greetings';

const CustomComponents = (props: React.ComponentProps<typeof Greetings>) => {
	return <div>{props.isLoggedIn}</div>;
};

export default CustomComponents;
