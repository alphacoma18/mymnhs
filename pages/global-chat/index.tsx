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
							title="Global Chat | MyMNHS"
							description="The MyMNHS global chat lets you chat with your fellow students and teachers in the whole campus, all in real time!"
							url="/global-chat"
							ogTitle="Global Chat | MyMNHS"
							ogDescription="The MyMNHS global chat lets you chat with your fellow students and teachers in the whole campus, all in real time!"
							ogUrl="/global-chat"
							twitterTitle="Global Chat | MyMNHS"
							twitterDescription="The MyMNHS global chat lets you chat with your fellow students and teachers in the whole campus, all in real time!"
							twitterUrl="/global-chat"
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
