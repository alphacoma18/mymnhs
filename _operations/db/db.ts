import mysql from "mysql2/promise";

const connection = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	connectionLimit: 100,
});

async function dbExecute(query: string, params?: any[]): Promise<any> {
	const conn = await connection.getConnection();
	const [data] = await conn.execute(query, params);
	conn.release();
	return JSON.parse(JSON.stringify(data));
}
export default dbExecute;
