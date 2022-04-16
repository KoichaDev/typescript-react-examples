// Constants
import * as PERSON_LIST from '@/constants/personList';

// Components
import Greetings from '@/components/Greetings';
import Person from '@/components/Person';
import PersonList from '@/components/PersonList';

// Styling
import './App.css';

function App() {
	return (
		<div className='App'>
			<Greetings personName='James Bond' messageCount={10} isLoggedIn={false} />
			<Person personName={PERSON_LIST.NAME} />
			<PersonList personNames={PERSON_LIST.NAME_LIST} />
		</div>
	);
}

export default App;
