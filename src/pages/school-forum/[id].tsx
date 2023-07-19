import { GetStaticProps } from "next";
import React from "react";
// import Meta from "../../components/meta";
import {
	IInnerForumAnswerData,
	IInnerForumQuestionData,
} from "../../interface/school-forum/answer";
interface Props {
	forumData: IInnerForumQuestionData;
	answerData: IInnerForumAnswerData[];
	currentId: string;
}

const IndiForum: React.FC<Props> = ({ forumData, answerData, currentId }) => {
	return (
		<>
			<h1></h1>
		</>
	);
};
export default IndiForum;
export const getStaticProps: GetStaticProps = async (context) => {};
