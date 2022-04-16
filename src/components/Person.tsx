type PersonProps = {
	personName: {
		firstName: string;
		lastName: string;
	};
};

const Person = (props: PersonProps) => {
	const { firstName, lastName } = props.personName;

	return <div>{`${firstName} ${lastName}`}</div>;
};

export default Person;
