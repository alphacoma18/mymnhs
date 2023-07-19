import ErrorPage from "@/components/pages/_error";
export default () => {
	return (
		<ErrorPage
			props={{
				code: 404,
				msg: "Page Not Found",
			}}
		></ErrorPage>
	);
};
