import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { IOuterForumQuestionList } from "../../../../interface/school-forum/question";
const OuterForumMain: React.FC<IOuterForumQuestionList> = ({ data }) => {
	return (
		<>
			<section className={styles.outermostForum}>
				{data.map((item) => {
					return (
						<div
							className={styles.individualQuestion}
							key={item.question_id}
						>
							<div className={styles.questionData}>
								<h4 className={styles.questionHeader}>
									<Link
										href={`/school-forum/${item.question_id}`}
									>
										<a>{item.question_header}</a>
									</Link>
								</h4>
								<p className={styles.questionBody}>
									{item.question_body}
								</p>
								<h5 className={styles.questionAsker}>
									{item.account_first_name}{" "}
									{item.account_last_name} from{" "}
									{item.section_grade} - {item.section_strand}
								</h5>
								<h5 className={styles.questionTimestamp}>
									{item.question_timestamp
										.slice(0, 19)
										.replace("T", " ")}
								</h5>
							</div>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default OuterForumMain;
