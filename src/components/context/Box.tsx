import { useContext } from 'react';
import { ThemeContext } from '@/components/context/ThemeContextProvider';

const Box = () => {
	const themeCtx = useContext(ThemeContext);

	return (
		<div style={{ backgroundColor: themeCtx.primary.main, color: themeCtx.primary.text }}>Box</div>
	);
};

export default Box;
