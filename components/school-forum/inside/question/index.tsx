import React from "react";
import styles from "./index.module.css";
import { IQuestionData } from "../../../../pages/school-forum/[id]";
const InnerForumQuestion: React.FC<{ data: IQuestionData }> = ({ data }) => {
	
	return (
		<>
			<div className={styles.outermostQuestion}>
				<div className={styles.secondOuter}>
					<div className={styles.header}>
						<h3>{data.question_header}</h3>
					</div>
					<hr className="horizontalRuleYellow" />
					<div className={styles.body}>
						<p>{data.question_body}</p>
					</div>
					<hr className="horizontalRuleYellow" />
					<div className={styles.meta}>
						<p>
							{data.section_grade} {data.section_strand}{" "}
							{data.section_name} - {data.account_first_name}{" "}
							{data.account_last_name}
						</p>
						<p>{data.question_timestamp}</p>
					</div>
					<hr className="horizontalRule" />
					<div className={styles.qnaNumber}>
						<h3>Forum Question #{data.question_id} Responses:</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default InnerForumQuestion;
