import React, {useContext} from "react";
import AuthContext from "../_operations/context/AuthProvider";
const Index: React.FC = () => {
	const {user, token} = useContext(AuthContext)
	
	return (
		<div>
			<p>{token}</p>
			<h1>this is the home page</h1>
		</div>
	);
};

export default Index;
