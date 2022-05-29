import React from "react";
import ButtonOptions from "../../../_buttonOptions";
import { axios } from "../../../../_operations/axios/axios";
const NewFormSurvey: React.FC = () => {
	const thisAPI: string = "/forms-and-surveys";
	async function CreateExecutor(
		body?: string,
		header?: string,
		url?: string
	): Promise<void> {
		await axios.post(thisAPI, {
			body,
			header,
			url,
		});
		return void 0;
	}
	return (
		<>
			<ButtonOptions
				createExecutor={CreateExecutor}
				createButton={true}
				placeholderURL={">>> Enter Survey Form URL Here"}
				placeholderH={">>> Enter Survey Form Title Here"}
				placeholderB={">>> Enter Survey Form Body Here"}
				maxLengthH={100}
				maxLengthB={1000}
				maxLengthURL={100}
			/>
		</>
	);
};

export default NewFormSurvey;
