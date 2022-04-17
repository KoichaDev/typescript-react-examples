import { Name } from './Person.types';

type personListProps = {
	personNames: Name[];
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
