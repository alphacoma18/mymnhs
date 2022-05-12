import React from "react";
import Head from "next/head";

interface Props {
	title: string;
	description: string;
	ogTitle: string;
	ogDescription: string;
	twitterTitle: string;
	twitterDescription: string;
}
const Meta: React.FC<Props> = (props) => {
	const {
		title,
		description,
		ogTitle,
		ogDescription,
		twitterTitle,
		twitterDescription,
	} = props;
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:description" content={ogDescription} />
			<meta property="twitter:title" content={twitterTitle} />
			<meta property="twitter:description" content={twitterDescription} />
		</Head>
	);
};

export default Meta;
