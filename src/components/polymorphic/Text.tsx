import React from 'react';

type TextOwnProps<E extends React.ElementType> = {
	size?: 'sm' | 'md' | 'lg';
	color?: 'primary' | 'secondary';
	as?: E;
	children: React.ReactNode;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const Text = <E extends React.ElementType = 'div'>(props: TextProps<E>) => {
	const { size, color, children, as } = props;

	const Component = as || 'div';

	return <Component className={`class-width-${size}-${color}`}>{children}</Component>;
};

export default Text;
