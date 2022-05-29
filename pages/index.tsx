import React from "react";
import Meta from "../components/_meta";
import Layout from "../components/_layout";

const Index: React.FC = () => {
	return (
		<>
			<Layout
				page={
					<>
						<Meta
							title="Home | MyMNHS"
							description="Welcome to the MyMNHS website! Connect with your classmates and teachers in the school community of Meycauayan National High School. Be the best, choose MNHS!"
							url="https://mymnhs.vercel.app"
							ogTitle="Home | MyMNHS"
							ogDescription="Welcome to the MyMNHS website! Connect with your classmates and teachers in the school community of Meycauayan National High School. Be the best, choose MNHS!"
							ogUrl="https://mymnhs.vercel.app"
							twitterTitle="Home | MyMNHS"
							twitterDescription="Welcome to the MyMNHS website! Connect with your classmates and teachers in the school community of Meycauayan National High School. Be the best, choose MNHS!"
							twitterUrl="https://mymnhs.vercel.app"
						/>
						<section>
							<h1>this is the home page</h1>
						</section>
					</>
				}
			/>
		</>
	);
};

export default Index;
