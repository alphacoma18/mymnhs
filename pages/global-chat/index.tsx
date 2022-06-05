import React from "react";
import Meta from "../../components/_meta";
import Layout from "../../components/_layout";
import GlobalChatComponent from "../../components/global-chat";

const Messages: React.FC = () => {
	return (
		<>
			<Layout
				page={
					<>
						<Meta
							title="Messages | MyMNHS"
							description="MyMNHS Messages lets you chat with your classmates and teachers in real time!"
							url="/messages"
							ogTitle="Messages | MyMNHS"
							ogDescription="MyMNHS Messages lets you chat with your classmates and teachers in real time!"
							ogUrl="/messages"
							twitterTitle="Messages | MyMNHS"
							twitterDescription="MyMNHS Messages lets you chat with your classmates and teachers in real time!"
							twitterUrl="/messages"
						/>
						<section>
							<GlobalChatComponent />
						</section>
					</>
				}
			/>
		</>
	);
};

export default Messages;
