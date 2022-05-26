import React from "react";
import Layout from "../../components/_layout";
import dbExecute from "../../_operations/db/db";
import { GetStaticProps, GetStaticPaths } from "next";
import Meta from "../../components/_meta";
import styles from "./id.module.css";
import InnerForumAnswer from "../../components/school-forum/inside/answer";
import InnerForumQuestion from "../../components/school-forum/inside/question";
import NewForumAnswer from "../../components/school-forum/inside/newAnswer";
const IndiForum: React.FC<Props> = ({ forumData, answerData, currentId }) => {
	return (
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
				<div className={styles.secondOutermost}>
					<InnerForumQuestion data={forumData} />
					<InnerForumAnswer data={answerData} />
				</div>
				<NewForumAnswer currentId={currentId} />
			</section>
		</>
	);
};
interface Props {
	forumData: IQuestionData;
	answerData: IAnswerData[];
	currentId: string;
}
export interface IQuestionData {
	account_first_name: string;
	account_last_name: string;
	section_grade: number;
	section_strand: string;
	section_name: string;
	question_id: number;
	question_header: string;
	question_body: string;
	question_timestamp: string;
}
export interface IAnswerData {
	account_first_name: string;
	account_last_name: string;
	section_grade: number;
	section_strand: string;
	section_name: string;
	general_id: number;
	answer_content: string;
	answer_timestamp: string;
}
const IndiForumPage: React.FC<Props> = ({
	forumData,
	answerData,
	currentId,
}) => {
	return (
		<>
			<Layout
				page={
					<IndiForum
						forumData={forumData}
						answerData={answerData}
						currentId={currentId}
					/>
				}
			/>
		</>
	);
};
export default IndiForumPage;

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
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context;
	const sql: string = `
		SELECT account_first_name, account_last_name, section_grade, section_strand, section_name, question_id, question_header, question_body, question_timestamp
		FROM forum_question_table
		JOIN account_table
		ON forum_question_table.question_asker_id = account_table.account_id
		JOIN section_table
		ON account_table.account_section_id = section_table.section_id
		WHERE forum_question_table.question_id = ?;`;

	const questionData: IQuestionData[] = await dbExecute(sql, [params?.id]);
	const _questionData: IQuestionData = questionData[0];
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

	const answerData: IAnswerData = await dbExecute(sql2, [params?.id]);

	return {
		props: {
			forumData: _questionData,
			answerData,
			currentId: params?.id,
		},
		revalidate: 60,
	};
};
