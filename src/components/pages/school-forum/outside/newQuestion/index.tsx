import React from "react";
import { axios } from "../../../../../utils/axios/axios";
import ButtonOptions from "../../../../_buttonOptions";
const NewForumQuestion: React.FC = () => {
	const thisAPI: string = "/school-forum";
	async function CreateExecutor(body?: string, header?: string) {
		await axios.post(thisAPI, {
			body,
			header,
		});
	}
	return (
		<>
			<ButtonOptions
				createExecutor={CreateExecutor}
				createButton={true}
				placeholderH={">>> Enter Forum Question Header"}
				placeholderB={">>> Enter Forum Question Body"}
				maxLengthH={120}
				maxLengthB={1000}
			/>
		</>
	);
};

export default NewForumQuestion;
