import { PersonProps } from './Person.types';

const Person = (props: PersonProps) => {
	const { firstName, lastName } = props.personName;

	return <div>{`${firstName} ${lastName}`}</div>;
};

export default Person;
