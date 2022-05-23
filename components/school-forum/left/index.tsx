import React from "react";
interface Props {
	question_id: number;
	question_header: string;
	question_body: string;
	question_timestamp: string;
	account_first_name: string;
	account_last_name: string;
	section_grade: number;
	section_strand: string;
}
interface ListProps {
	data: Props[];
}
const OuterForumLeft: React.FC<ListProps> = ({ data }) => {
	return (
		<>
			<section>Hello World</section>
		</>
	);
};

export default OuterForumLeft;
