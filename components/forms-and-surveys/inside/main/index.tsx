import React from "react";
import styles from "./index.module.css";
import { IInnerSurveyPostData } from "../../../../interface/forms-and-surveys/posts";
const InnerSurveyMain: React.FC<{ data: IInnerSurveyPostData }> = ({
	data,
}) => {
	return (
		<>
			<div className={styles.outermostQuestion}>
				<div className={styles.secondOuter}>
					<div className={styles.header}>
						<h3>{data.survey_header}</h3>
					</div>
					<hr className="horizontalRuleYellow" />
					<div className={styles.body}>
						<p>
							Survey Link:{" "}
							<a
								href={data.survey_url}
								hrefLang="en"
								className={styles.urlLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								{data.survey_url}
							</a>
						</p>
						<p>{data.survey_body}</p>
					</div>
					<hr className="horizontalRuleYellow" />
					<div className={styles.meta}>
						<p>
							{data.section_grade} {data.section_strand}{" "}
							{data.section_name} - {data.account_first_name}{" "}
							{data.account_last_name}
						</p>
						<p>{data.survey_post_timestamp}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default InnerSurveyMain;
