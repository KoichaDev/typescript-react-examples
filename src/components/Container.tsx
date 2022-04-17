type ContainerProps = {
	style: React.CSSProperties;
	children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ style, children }) => {
	return <div style={style}>{children}</div>;
};

export default Container;
