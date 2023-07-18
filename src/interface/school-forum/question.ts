export interface IOuterForumQuestionData {
	question_id: number;
	question_header: string;
	question_body: string;
	question_timestamp: string;
	account_first_name: string;
	account_last_name: string;
	section_grade: number;
	section_strand: string;
}
export interface IOuterForumQuestionList {
	data: [] | IOuterForumQuestionData[];
}
