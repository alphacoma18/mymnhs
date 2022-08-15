import React from "react";
import styles from "./index.module.css";
import Layout from "../../layout/layout1";
import Meta from "../../components/meta";
import { GetStaticProps } from "next";
import dbExecute from "../../utils/db/db";

import OuterForumMain from "../../components/pages/school-forum/outside/main";
import NewForumQuestion from "../../components/pages/school-forum/outside/newQuestion/index";
import {
	IOuterForumQuestionData,
	IOuterForumQuestionList,
} from "../../interface/school-forum/question";

const SchoolForum: React.FC<IOuterForumQuestionList> = ({ data }) => {
	return (
		<>
			<Layout>
				<>
					<Meta
						title="School Forum | MyMNHS"
						description="The MyMNHS School Forum allows you to freely ask and answer school related queries for the betterment of the community. Be the best, choose MNHS! "
						url="/school-forum"
						ogTitle="School Forum | MyMNHS"
						ogDescription="The MyMNHS School Forum allows you to freely ask and answer school related queries for the betterment of the community. Be the best, choose MNHS! "
						ogUrl="/school-forum"
						twitterTitle="School Forum | MyMNHS"
						twitterDescription="The MyMNHS School Forum allows you to freely ask and answer school related queries for the betterment of the community. Be the best, choose MNHS! "
						twitterUrl="/school-forum"
					/>
					<section className={styles.outermostForumSection}>
						<OuterForumMain data={data} />
					</section>
					<NewForumQuestion />
				</>
			</Layout>
		</>
	);
};
export default SchoolForum;

export const getStaticProps: GetStaticProps = async () => {
	const sql = `
			SELECT question_id, question_header, question_body, question_timestamp, account_first_name, account_last_name, section_grade, section_strand FROM forum_question_table
			JOIN account_table
			ON forum_question_table.question_asker_id = account_table.account_id
			JOIN section_table
			ON account_table.account_section_id = section_table.section_id
			ORDER BY question_timestamp DESC`;
	const data: IOuterForumQuestionData[] = await dbExecute(sql);
	return {
		props: {
			data,
		},
		revalidate: 5,
	};
};
