import ErrorPage from "@/components/pages/_error";
export default () => {
	return (
		<ErrorPage
			props={{
				code: 503,
				msg: "Page Offline",
			}}
		></ErrorPage>
	);
};
