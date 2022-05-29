export interface IOuterSurveyPostData {
	survey_id: number;
	survey_header: string;
	survey_body: string;
	survey_url: string;
	survey_post_timestamp: string;
	account_first_name: string;
	account_last_name: string;
	section_grade: number;
	section_strand: string;
}
export interface IOuterSurveyPostDataList {
	data: [] | IOuterSurveyPostData[];
}

export interface IInnerSurveyPostData {
	account_first_name: string;
	account_last_name: string;
	section_grade: number;
	section_strand: string;
	section_name: string;
	survey_id: number;
	survey_header: string;
	survey_body: string;
	survey_url: string;
	survey_post_timestamp: string;
}
export interface IInnerSurveyPostDataList {
	data: [] | IInnerSurveyPostData[];
}
