import { useRef, useEffect } from 'react';

const DOMRef = () => {
	// If you are sure when accessing the input element is non-null, then add the exclamation sign
	const inputRef = useRef<HTMLInputElement>(null!);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return <input ref={inputRef} type='text' />;
};

export default DOMRef;
