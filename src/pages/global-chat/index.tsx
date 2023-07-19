import GenMeta from "@/components/gen/meta";
import { NextPageWithLayout } from "@/nextPage";
const GlobalChatPage: NextPageWithLayout = () => {
	return (
		<>
			<GenMeta
				props={{
					title: "Global Chat",
					description:
						"The MyMNHS global chat lets you chat with your fellow students and teachers in the whole campus, all in real time!",
				}}
			/>
		</>
	);
};

export default GlobalChatPage;
