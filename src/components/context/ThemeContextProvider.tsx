import React from 'react';
import theme from './themeContext';

type ThemeContextProviderProps = {
	children: React.ReactNode;
};

export const ThemeContext = React.createContext(theme);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	const themeContextValue = theme;

	return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
