import React, { useState, useEffect } from "react";
import { axios } from "../axios/axios";
import { io, Socket } from "socket.io-client";
const socket = io("https://mymnhs.herokuapp.com");
interface IAuthContext {
	user: null | undefined | User;
	socket: Socket;
}
const AuthContext = React.createContext<IAuthContext>({
	user: null,
	socket,
});
export default AuthContext;

interface MainProps {
	children: React.ReactNode;
}
export interface User {
	account_id: number;
	account_first_name: string;
	account_last_name: string;
	account_section_id: number;
	section_grade: number;
	section_strand: string;
	section_name: string;
}
export const AuthProvider: React.FC<MainProps> = ({ children }) => {
	const [user, setUser] = useState<null | undefined | User>(null);
	useEffect(() => {
		async function asyncEffect(): Promise<void> {
			const x = await axios.get("/auth");
			setUser(x.data.user);
			return void 0;
		}
		asyncEffect();
	}, []);
	return (
		<AuthContext.Provider
			value={{
				user,
				socket,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};