import { useState, createContext } from 'react';

export type AuthUser = {
	name: string;
	email: string;
};

type UserContextProviderProps = {
	children: React.ReactNode;
};

type UserContextType = {
	user: AuthUser | null;
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<AuthUser | null>(null);

	const contextValue = {
		user,
		setUser,
	};

	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
