type personListProps = {
	personNames: {
		firstName: string;
		lastName: string;
	}[];
};

const PersonList = (props: personListProps) => {
	return (
		<div>
			{props.personNames.map((person, index) => {
				const { firstName, lastName } = person;
				return <h2 key={index}>{`${firstName} ${lastName}`}</h2>;
			})}
		</div>
	);
};

export default PersonList;
