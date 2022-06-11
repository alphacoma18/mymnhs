import React from "react";
import LayoutFooter from "../../components/_layoutFooter";
import dbExecute from "../../_operations/db/db";
import { GetStaticProps, GetStaticPaths } from "next";
import Meta from "../../components/_meta";
import styles from "./id.module.css";
import InnerForumAnswer from "../../components/school-forum/inside/answer";
import InnerForumQuestion from "../../components/school-forum/inside/question";
import NewForumAnswer from "../../components/school-forum/inside/newAnswer";
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
			<LayoutFooter
				page={
					<>
						<Meta
							title={`${forumData.question_header} | MyMNHS`}
							description={`${forumData.question_body} | MyMNHS`}
							url={`/school-forum/${forumData.question_id}`}
							ogTitle={`${forumData.question_header} | MyMNHS`}
							ogDescription={`${forumData.question_body} | MyMNHS`}
							ogUrl={`/school-forum/${forumData.question_id}`}
							twitterTitle={`${forumData.question_header} | MyMNHS`}
							twitterDescription={`${forumData.question_body} | MyMNHS`}
							twitterUrl={`/school-forum/${forumData.question_id}`}
						/>
						<section className={styles.outermostForum}>
							<InnerForumQuestion data={forumData} />
							<InnerForumAnswer data={answerData} />
							<NewForumAnswer currentId={currentId} />
						</section>
					</>
				}
			/>
		</>
	);
};
export default IndiForum;

interface Data {
	question_id: number;
}
export const getStaticPaths: GetStaticPaths = async () => {
	const sql: string = `
		SELECT question_id FROM forum_question_table`;
	const data: Data[] = await dbExecute(sql);
	const paths = data.map((item: Data) => {
		return { params: { id: `${item.question_id}` } };
	});

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context;
	const id = params?.id;
	const sql: string = `
		SELECT account_first_name, account_last_name, section_grade, section_strand, section_name, question_id, question_header, question_body, question_timestamp
		FROM forum_question_table
		JOIN account_table
		ON forum_question_table.question_asker_id = account_table.account_id
		JOIN section_table
		ON account_table.account_section_id = section_table.section_id
		WHERE forum_question_table.question_id = ?;`;

	const questionData: IInnerForumAnswerData[] = await dbExecute(sql, [id]);
	const _questionData: IInnerForumAnswerData = questionData[0];

	const sql2: string = `
		SELECT account_first_name, account_last_name, section_grade , section_strand, section_name, general_id, answer_content, answer_timestamp
		FROM forum_answer_table
		JOIN forum_question_table
		ON forum_question_table.question_id = forum_answer_table.forum_id
		JOIN account_table
		ON forum_answer_table.answerer_id = account_table.account_id
		JOIN section_table
		ON account_table.account_section_id = section_table.section_id
		WHERE forum_question_table.question_id = ?;`;

	const answerData: IInnerForumAnswerData = await dbExecute(sql2, [id]);

	return {
		props: {
			forumData: _questionData,
			answerData,
			currentId: id,
		},
		revalidate: 5,
	};
};
