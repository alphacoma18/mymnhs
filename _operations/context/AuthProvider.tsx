import React, { useState } from "react";

interface User {
	userId: number;
	userFirstName: string;
	userLastName: string;
	userSectionId: number;
}
interface IAuthContext {
	login: (xUser: User) => void;
	user: null | undefined | User;
}
const AuthContext = React.createContext<IAuthContext>({
	login: (_xUser: {}) => void 0,
	user: null,
});
export default AuthContext;

interface Props {
	children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
	const [user, setUser] = useState<null | undefined | User>(null);

	function login(xUser: User): void {
		setUser(xUser);
		return void 0;
	}
	return (
		<AuthContext.Provider
			value={{
				login,
				user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
