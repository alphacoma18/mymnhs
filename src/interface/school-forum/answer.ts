export interface IInnerForumQuestionData {
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
export interface IInnerForumAnswerData {
	account_first_name: string;
	account_last_name: string;
	section_grade: number;
	section_strand: string;
	section_name: string;
	general_id: number;
	answer_content: string;
	answer_timestamp: string;
}
