import React from "react";
import LayoutFooter from "../../components/_layoutFooter";
import dbExecute from "../../_operations/db/db";
import { GetStaticProps, GetStaticPaths } from "next";
import Meta from "../../components/_meta";
import styles from "./id.module.css";
import { IInnerSurveyPostData } from "../../interface/forms-and-surveys/posts";
import InnerSurveyMain from "../../components/forms-and-surveys/inside/main";
interface Props {
	surveyData: IInnerSurveyPostData;
	currentId: number;
}
const IndiSurvey: React.FC<Props> = ({ surveyData, currentId }) => {
	return (
		<>
			<Meta
				title={`${surveyData.survey_header} | MyMNHS`}
				description={`${surveyData.survey_body} | MyMNHS`}
				url={`/school-forum/${surveyData.survey_id}`}
				ogTitle={`${surveyData.survey_header} | MyMNHS`}
				ogDescription={`${surveyData.survey_body} | MyMNHS`}
				ogUrl={`/school-forum/${surveyData.survey_id}`}
				twitterTitle={`${surveyData.survey_header} | MyMNHS`}
				twitterDescription={`${surveyData.survey_body} | MyMNHS`}
				twitterUrl={`/school-forum/${surveyData.survey_id}`}
			/>
			<LayoutFooter
				page={
					<>
						<section className={styles.outermostSurvey}>
							<InnerSurveyMain data={surveyData} />
						</section>
					</>
				}
			/>
		</>
	);
};

export default IndiSurvey;

interface Data {
	survey_id: number;
}
export const getStaticPaths: GetStaticPaths = async () => {
	const sql: string = `
		SELECT survey_id FROM survey_post_table;`;
	const data: Data[] = await dbExecute(sql);
	const paths = data.map((item: Data) => {
		return { params: { id: `${item.survey_id}` } };
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
		SELECT account_first_name, account_last_name, section_grade, section_strand, section_name, survey_id, survey_header, survey_body, survey_url, survey_post_timestamp
		FROM survey_post_table
		JOIN account_table
		ON survey_post_table.survey_poster_id = account_table.account_id
		JOIN section_table
		ON account_table.account_section_id = section_table.section_id
		WHERE survey_post_table.survey_id = ?;`;

	const surveyData: IInnerSurveyPostData[] = await dbExecute(sql, [id]);
	const _surveyData: IInnerSurveyPostData = surveyData[0];

	return {
		props: {
			surveyData: _surveyData,
			currentId: id,
		},
		revalidate: 5,
	};
};
