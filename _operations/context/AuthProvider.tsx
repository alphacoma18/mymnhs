import React, { useState } from "react";

interface User {
	userId: number;
	userFirstName: string;
	userLastName: string;
	userSectionId: number;
}
interface IAuthContext {
	login: (xUser: User, xToken: string) => void;
	user: null | undefined | User;
	token: null | undefined | string;
}
const AuthContext = React.createContext<IAuthContext>({
	login: (_xUser: {}, _xToken: string) => void 0,
	user: null,
	token: null,
});
export default AuthContext;

interface Props {
	children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
	const [user, setUser] = useState<null | undefined | User>(null);
	const [token, setToken] = useState<null | undefined | string>(null);

	function login(xUser: User, xToken: string): void {
		setUser(xUser);
		setToken(xToken);
		return void 0;
	}
	return (
		<AuthContext.Provider
			value={{
				login,
				user,
				token,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
