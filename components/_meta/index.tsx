import React from "react";
import Head from "next/head";

interface Props {
	title: string;
	description: string;
	url: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	twitterTitle: string;
	twitterDescription: string;
	twitterUrl: string;
}
const Meta: React.FC<Props> = (props) => {
	const {
		title,
		description,
		url,
		ogTitle,
		ogDescription,
		ogUrl,
		twitterTitle,
		twitterDescription,
		twitterUrl,
	} = props;
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="url" content={`https://mymnhs.vercel.app${url}`} />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:description" content={ogDescription} />
			<meta
				property="og:url"
				content={`https://mymnhs.vercel.app${ogUrl}`}
			/>
			<meta property="twitter:title" content={twitterTitle} />
			<meta property="twitter:description" content={twitterDescription} />
			<meta
				property="twitter:url"
				content={`https://mymnhs.vercel.app${twitterUrl}`}
			/>
		</Head>
	);
};

export default Meta;
