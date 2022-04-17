import React, { useState } from 'react';

// Constants
import * as PERSON_LIST from '@/constants/personList';
import { ITEMS } from '@/constants/ItemList';

// Components
import Greetings from '@/components/Greetings';
import Person from '@/components/Person';
import PersonList from '@/components/PersonList';
import Heading from '@/components/Heading';
import { Status } from '@/components/Status';
import Oscar from '@/components/Oscar';
import Button from '@/components/Button';
import Input from '@/components/Input';

import Container from '@/components/Container';

import LoggedIn from '@/components/state/LoggedIn';
import User from '@/components/state/User';

import Counter from '@/components/state/Counter';
import ThemeContextProvider from '@/components/context/ThemeContextProvider';
import Box from '@/components/context/Box';

import { UserContextProvider } from '@/components/context/UserContextProvider';
import UserTwo from '@/components/context/User';

import DOMRef from '@/components/ref/DOMRef';
import MutableRef from '@/components/ref/MutableRef';

import Private from '@/components/auth/Private';
import Profile from '@/components/auth/Profile';

import List from '@/components/generics/List';
import RandomNumber from '@/components/restriction/RandomNumber';
import Toast from './components/template-literals/Toast';

import CustomButton from '@/components/html/CustomButton';

import Text from '@/components/polymorphic/Text';

// Styling
import './App.css';

function App() {
	const [enteredText, setEnteredText] = useState<string>('');

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredText(e.target.value);
	};

	return (
		<Container style={{ border: '1px solid red', padding: '1em' }}>
			<Greetings personName='James Bond' messageCount={10} isLoggedIn={false} />
			<Person personName={PERSON_LIST.NAME} />
			<PersonList personNames={PERSON_LIST.NAME_LIST} />

			<Status status='success' />
			<Oscar>
				<Heading>Oscar goes to Leonardo DiCaprio</Heading>
			</Oscar>

			<Greetings personName='asidji' isLoggedIn={true} />

			<Button onClick={(event, id) => console.log(event, id)} />
			<Input onChange={onChangeHandler} value={enteredText} />

			<LoggedIn />
			<User />
			<Counter />

			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>

			<UserContextProvider>
				<UserTwo />
			</UserContextProvider>

			<DOMRef />

			<MutableRef />

			<Private isLoggedIn={true} component={Profile} />
			<List items={PERSON_LIST.NAME_LIST} onAddOnClickItem={(item) => console.log(item)} />

			<RandomNumber value={10} isPositive />

			<Toast position='center' />

			<CustomButton variant='primary' onClick={() => console.log('click')}>
				Primary Button
			</CustomButton>

			<Text as='h1' size='lg'>
				Heading
			</Text>
			<Text as='p' size='md'>
				Paragraph
			</Text>
			<Text as='label' htmlFor='some-text' size='sm' color='secondary'>
				Label
			</Text>
		</Container>
	);
}

export default App;
