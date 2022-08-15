import { Pool } from "pg";
const pool = new Pool({
	host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: 5432,
	ssl: {
		rejectUnauthorized: false,
	},
});

async function dbExecute(query: string, params?: any[]): Promise<any> {
	const x = await pool.query(query, params);
	return JSON.parse(JSON.stringify(x.rows));
}
export default dbExecute;
