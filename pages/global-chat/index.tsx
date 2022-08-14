import React from "react";
import Layout2 from "../../layout/layout2";
import Meta from "../../components/meta";
import GlobalChatComponent from "../../components/pages/global-chat";

const Messages: React.FC = () => {
	return (
		<>
			<Layout2>
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
			</Layout2>
		</>
	);
};

export default Messages;
