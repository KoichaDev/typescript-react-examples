type GreetingsProps = {
	personName: string;
	messageCount: number;
	isLoggedIn: boolean;
};

const Greetings = (props: GreetingsProps) => {
	return (
		<div>
			<h2>
				{props.isLoggedIn
					? `Welcome ${props.personName}! You have ${props.messageCount} unread messages`
					: 'Welcome Guest'}
			</h2>
		</div>
	);
};

export default Greetings;
