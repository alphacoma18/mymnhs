import React from "react";
import Meta from "../../components/_meta";
import Layout from "../../components/_layout";
const GlobalChat: React.FC = () => {
	return (
		<>
			<Meta
				title="Messages | MNHS"
				description="MyMNHS Messages lets you chat with your classmates and teachers in real time!"
				url="/messages"
				ogTitle="Messages | MNHS"
				ogDescription="MyMNHS Messages lets you chat with your classmates and teachers in real time!"
				ogUrl="/messages"
				twitterTitle="Messages | MNHS"
				twitterDescription="MyMNHS Messages lets you chat with your classmates and teachers in real time!"
				twitterUrl="/messages"
			/>
			<div>
				<h1>this is the messages page</h1>
			</div>
		</>
	);
};
const MessagesPage: React.FC = () => {
	return (
		<>
			<Layout page={<GlobalChat />} />
		</>
	);
};

export default MessagesPage;
