import React from "react";
import ButtonOptions from "../../../../_buttonOptions";
import { axios } from "../../../../../utils/axios/axios";
interface Props {
	currentId: string;
}
const NewForumAnswer: React.FC<Props> = ({ currentId }) => {
	const thisAPI = "/school-forum/[id]";

	async function CreateExecutor(body?: string) {
		await axios.post(thisAPI, {
			body,
			currentId,
		});
	}

	return (
		<>
			<ButtonOptions
				createExecutor={CreateExecutor}
				createButton={true}
				placeholderB={">>> Enter your response"}
				maxLengthB={500}
			/>
		</>
	);
};

export default NewForumAnswer;