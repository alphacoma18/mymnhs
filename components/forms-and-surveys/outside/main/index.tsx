import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { IOuterSurveyPostDataList } from "../../../../interface/forms-and-surveys/posts";
const OuterSurveyMain: React.FC<IOuterSurveyPostDataList> = ({ data }) => {
	return (
		<>
			<section className={styles.outermostForum}>
				{data.map((item) => {
					return (
						<div
							className={styles.individualSurvey}
							key={item.survey_id}
						>
							<div className={styles.surveyData}>
								<h4 className={styles.surveyHeader}>
									<Link
										href={`/forms-and-surveys/${item.survey_id}`}
									>
										<a>{item.survey_header}</a>
									</Link>
								</h4>
								<p className={styles.surveyBody}>
									{item.survey_body}
								</p>
								<h5 className={styles.surveyAsker}>
									{item.account_first_name}{" "}
									{item.account_last_name} from{" "}
									{item.section_grade} - {item.section_strand}
								</h5>
								<h5 className={styles.surveyTimestamp}>
									{item.survey_post_timestamp}
								</h5>
							</div>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default OuterSurveyMain;
