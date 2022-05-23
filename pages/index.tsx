import React, { useContext } from "react";
import AuthContext from "../_operations/context/AuthProvider";
import Meta from "../components/_meta";
import Nav from "../components/_nav";
import Layout from "../components/_layout";
import styles from "./index.module.css";
const Index: React.FC = () => {
	return (
		<>
			<Meta
				title="Home | MyMNHS"
				description="Welcome to the MyMNHS website! Connect with your classmates and teachers in the school community of Meycauayan National High School. Be the best, choose MNHS!"
				url="/"
				ogTitle="Home | MyMNHS"
				ogDescription="Welcome to the MyMNHS website! Connect with your classmates and teachers in the school community of Meycauayan National High School. Be the best, choose MNHS!"
				ogUrl="/"
				twitterTitle="Home | MyMNHS"
				twitterDescription="Welcome to the MyMNHS website! Connect with your classmates and teachers in the school community of Meycauayan National High School. Be the best, choose MNHS!"
				twitterUrl="/"
			/>
			<section>
				<h1>this is the home page</h1>
			</section>
		</>
	);
};
const IndexPage = () => {
	return (
		<>
			<Layout page={<Index />} />
		</>
	);
};

export default IndexPage;
