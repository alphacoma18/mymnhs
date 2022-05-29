import React from "react";
import styles from "./index.module.css";
import { IInnerForumAnswerData } from "../../../../interface/school-forum/answer";
const InnerForumAnswer: React.FC<{ data: IInnerForumAnswerData[] }> = ({
	data,
}) => {
	return (
		<>
			<section className={styles.outerAnswer}>
				{data.map((response) => {
					return (
						<div
							className={styles.IndiAnswer}
							key={response.general_id}
						>
							<p>{response.answer_content}</p>
							<p className={styles.meta}>
								{response.section_grade}{" "}
								{response.section_strand}
								{" - "}
								{response.account_first_name}{" "}
								{response.account_last_name}
							</p>
							<p className={styles.meta}>
								{response.answer_timestamp}
							</p>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default InnerForumAnswer;
