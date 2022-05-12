import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthProvider";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>MNHS | School Platform</title>
				<meta
					name="author"
					content="Alpha Romer Coma, alphacoma18@gmail.com"
				/>
				<meta
					name="description"
					content="The unofficial school platform of Meycauayan National High School - Senior High School! 'Be the Best, Choose MNHS!'"
				/>
				<meta name="Classification" content="Education" />
				<meta name="url" content="https://mnhs-shs.herokuapp.com" />
				<meta
					name="identifier-URL"
					content="https://mnhs-shs.herokuapp.com"
				/>
				<meta name="language" content="EN" />

				{/* Robot Meta Tags */}
				<meta name="robots" content="all" />
				<meta name="Googlebot" content="all" />
				<meta name="Bingbot" content="all" />
				<meta name="Bingbot" content="all" />
				<meta name="Baiduspider" content="all" />
				<meta name="YandexBot" content="all" />
				<meta name="revisit-after" content="2 days" />

				{/* Open Graph Meta Tags */}
				<meta property="og:title" content="MNHS | School Platform" />
				<meta
					property="og:site_name"
					content="MNHS | School Platform"
				/>
				<meta
					property="og:description"
					content="The unofficial school platform of Meycauayan National High School - Senior High School! 'Be the Best, Choose MNHS!'"
				/>
				<meta property="og:type" content="school" />
				<meta
					property="og:image"
					content="https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.6435-9/101013237_3131035020276550_4793863593227452416_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=426FSBVwkoIAX-_wSSn&_nc_oc=AQmMCpxg4ttrRDVOFIeXCTejf3AQGqRQJUC_ssNQoFqFWGIguz3kDvNDwwryHZvUXkw&tn=NL5qY61PdfAqoKKc&_nc_ht=scontent.fcrk1-3.fna&oh=00_AT906LtM39RmBNIsAYeeYRqktuY7_2ii8-axHohl8Av2AA&oe=626CB1BE"
				/>
				<meta property="og:image:type" content="image/jpg" />
				<meta
					property="og:url"
					content="https://mnhs-shs.herokuapp.com"
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:email" content="alphacoma18@gmail.com" />
				<meta property="og:locale:alternative" content="ja_JP" />

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="MNHS | School Platform" />
				<meta name="twitter:app:country" content="EN" />
				<meta
					name="twitter:description"
					content="The unofficial school platform of Meycauayan National High School - Senior High School! 'Be the Best, Choose MNHS!'"
				/>
				<meta
					name="twitter:image"
					content="https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.6435-9/101013237_3131035020276550_4793863593227452416_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=426FSBVwkoIAX-_wSSn&_nc_oc=AQmMCpxg4ttrRDVOFIeXCTejf3AQGqRQJUC_ssNQoFqFWGIguz3kDvNDwwryHZvUXkw&tn=NL5qY61PdfAqoKKc&_nc_ht=scontent.fcrk1-3.fna&oh=00_AT906LtM39RmBNIsAYeeYRqktuY7_2ii8-axHohl8Av2AA&oe=626CB1BE"
				/>
				<meta
					name="twitter:image:alt"
					content="Meycauayan National High School Campus Picture"
				/>

				<meta name="twitter:site" content="@senodesuzo" />
				<meta name="twitter:creator" content="@senodesuzo" />
				<meta
					name="twitter:url"
					content="https://mnhs-shs.herokuapp.com"
				/>

				{/* Devices */}
				<meta name="mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-title"
					content="MNHS | School Platform"
				/>
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-touch-fullscreen" content="yes" />

				<meta name="msapplication-TileColor" content="#006400" />
				<meta name="theme-color" content="#006400" />
			</Head>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</>
	);
}

export default MyApp;
