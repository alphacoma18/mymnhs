import React from "react";
import ButtonOptions from "../../../_buttonOptions";
import { axios } from "../../../../_operations/axios/axios";
interface Props {
	currentId: string;
}
const NewForumAnswer: React.FC<Props> = ({ currentId }) => {
	const thisAPI: string = "/school-forum/[id]";

	async function CreateExecutor(body?: string): Promise<void> {
		await axios.post(thisAPI, {
			body,
			currentId,
		});
		return void 0;
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
