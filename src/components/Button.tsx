import React from 'react';

type ButtonProps = {
	onClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button: React.FC<ButtonProps> = ({ onClick }) => {
	return (
		<button type='button' onClick={(event) => onClick(event, 1)}>
			Click Me
		</button>
	);
};

export default Button;
