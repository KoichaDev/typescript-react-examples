type HeadingProps = {
	children: string;
};

const Heading: React.FC<HeadingProps> = ({ children }) => {
	return <h2>{children}</h2>;
};

export default Heading;
