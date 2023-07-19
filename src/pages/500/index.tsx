import ErrorPage from "@/components/pages/_error";
export default () => {
	return (
		<ErrorPage
			props={{
				code: 500,
				msg: "Internal Server Error",
			}}
		></ErrorPage>
	);
};
