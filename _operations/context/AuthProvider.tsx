import React from "react";
interface IAuthContext {}
const AuthContext = React.createContext<IAuthContext>({});
export default AuthContext;

interface MainProps {
	children: React.ReactNode;
}

export const AuthProvider: React.FC<MainProps> = ({ children }) => {
	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
