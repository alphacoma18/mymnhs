import React from "react";
import Layout from "../../components/_layout";
import dbExecute from "../../_operations/db/db";
import { GetStaticProps } from "next";
const IndiForum: React.FC = () => {
	return <div>IndiForum</div>;
};
const IndiForumPage: React.FC = () => {
	return (
		<>
			<Layout page={<IndiForum />} />
		</>
	);
};
export default IndiForumPage;

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    // const sql: string = ``
	return {
		props: {},
	};
};
