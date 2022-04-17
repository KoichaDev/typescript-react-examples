import { useState, useRef, useEffect } from 'react';

const MutableRef = () => {
	const [timer, setTimer] = useState(0);
	const interValRef = useRef<number | null>(null);

	const stopTimer = () => {
		if (!interValRef.current) return;

		window.clearInterval(interValRef.current);
	};

	useEffect(() => {
		interValRef.current = window.setInterval(() => {
			setTimer((currentTimer) => currentTimer + 1);
		}, 1000);

		return () => {
			stopTimer();
		};
	}, []);

	return (
		<div>
			HookTimer - {timer} -
			<button type='button' onClick={() => stopTimer()}>
				Stop Timer
			</button>
		</div>
	);
};

export default MutableRef;
