import React from "react";

interface IAuthContext {}
const AuthContext = React.createContext<IAuthContext>({});
export default AuthContext;

interface Props {
	children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
