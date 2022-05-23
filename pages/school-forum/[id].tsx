import React from "react";
import Layout from "../../components/_layout";
import dbExecute from "../../_operations/db/db";
import { GetStaticProps, GetStaticPaths } from "next";
import Meta from "../../components/_meta";
const IndiForum: React.FC<Props> = ({ forumData, answerData }) => {
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
			<div>{forumData.account_last_name}</div>
		</>
	);
};
interface Props {
	forumData: ForumData;
	answerData: AnswerData[];
}
interface ForumData {
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
interface AnswerData {
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
const IndiForumPage: React.FC<Props> = ({ forumData, answerData }) => {
	return (
		<>
			<Layout
				page={
					<IndiForum forumData={forumData} answerData={answerData} />
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
		WHERE forum_question_table.question_id = "1";`;

	const forumData: ForumData[] = await dbExecute(sql);
	const _ForumData: ForumData = forumData[0];
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

	const answerData: AnswerData = await dbExecute(sql2, [params?.id]);
	return {
		props: {
			forumData: _ForumData,
			answerData,
		},
		revalidate: 60,
	};
};
