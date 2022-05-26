interface RefreshValue {
	account_id: number;
	account_first_name: string;
	account_last_name: string;
	account_section_id: number;
}

export interface ITokenValue {
	user?: RefreshValue;
	exp?: number;
}
