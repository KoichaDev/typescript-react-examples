type GreetingsProps = {
	personName: string;
	messageCount?: number;
	isLoggedIn: boolean;
};

const Greetings = (props: GreetingsProps) => {
	const { personName, messageCount = 0 } = props;

	return (
		<div>
			<h2>
				{props.isLoggedIn
					? `Welcome ${personName}! You have ${messageCount} unread messages`
					: 'Welcome Guest'}
			</h2>
		</div>
	);
};

export default Greetings;
