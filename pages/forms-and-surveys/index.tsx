import React from "react";
import styles from "./index.module.css";
import LayoutFooter from "../../components/_layoutFooter";
import Meta from "../../components/_meta";
import dbExecute from "../../_operations/db/db";

import OuterSurveyMain from "../../components/forms-and-surveys/outside/main";
import NewFormSurvey from "../../components/forms-and-surveys/outside/newForm";
import {
	IOuterSurveyPostData,
	IOuterSurveyPostDataList,
} from "../../interface/forms-and-surveys/posts";
const FormsNSurvey: React.FC<IOuterSurveyPostDataList> = ({ data }) => {
	return (
		<>
			<LayoutFooter
				page={
					<>
						<Meta
							title="Forms and Surveys | MyMNHS"
							description="Have a survey for your research? Post it here and get responses from your target respondents within Meycauayan National High School!"
							url="/forms-and-surveys"
							ogTitle="Forms and Surveys | MyMNHS"
							ogDescription="Have a survey for your research? Post it here and get responses from your target respondents within Meycauayan National High School!"
							ogUrl="/forms-and-surveys"
							twitterTitle="Forms and Surveys | MyMNHS"
							twitterDescription="Have a survey for your research? Post it here and get responses from your target respondents within Meycauayan National High School!"
							twitterUrl="/forms-and-surveys"
						/>
						<section className={styles.outermostSurveySection}>
							<OuterSurveyMain data={data} />
						</section>
						<NewFormSurvey />
					</>
				}
			/>
		</>
	);
};
export default FormsNSurvey;

export const getStaticProps = async () => {
	const sql: string = `
		SELECT survey_id, survey_header, survey_body, survey_url,survey_post_timestamp, account_first_name, account_last_name, section_grade, section_strand
		FROM survey_post_table
		JOIN account_table
		ON survey_post_table.survey_poster_id = account_table.account_id
		JOIN section_table
		ON account_table.account_section_id = section_table.section_id
		ORDER BY survey_post_timestamp DESC;`;
	const data: IOuterSurveyPostData[] = await dbExecute(sql);

	return {
		props: {
			data: data,
		},
		revalidate: 5,
	};
};
