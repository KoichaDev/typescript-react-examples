import { useReducer } from 'react';

type CounterState = {
	count: number;
};

type updateAction = {
	type: 'increment' | 'decrement';
	payload: number;
};

type resetAction = {
	type: 'reset';
};

type CounterAction = updateAction | resetAction;

const initialState = {
	count: 0,
};

const reducer = (state: CounterState, action: CounterAction) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + action.payload };
		case 'decrement':
			return { count: state.count - action.payload };
		case 'reset':
			return initialState;
		default:
			return state;
	}
};

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const incrementCountHandler = () => {
		dispatch({
			type: 'increment',
			payload: 10,
		});
	};

	const decrementCountHandler = () => {
		dispatch({
			type: 'decrement',
			payload: 10,
		});
	};

	const resetCountHandler = () => {
		dispatch({
			type: 'reset',
		});
	};

	return (
		<>
			<p>Count: {state.count}</p>

			<button onClick={incrementCountHandler}>Increment by 10</button>
			<button onClick={decrementCountHandler}>Decrement by 10</button>
			<button onClick={resetCountHandler}>Reset</button>
		</>
	);
};

export default Counter;
