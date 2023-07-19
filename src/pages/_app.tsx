import "@/fontello/css/fontello.css";
import "@/styles/globals.css";
import { Partytown } from "@builder.io/partytown/react";
import { Analytics } from "@vercel/analytics/react";
import { NextPage } from "next";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { ReactElement, ReactNode } from "react";
import { ContextProviderGlobal } from "../utils/context/_global";

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
	P,
	IP
> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp(props: AppPropsWithLayout & AppProps<{ session: Session }>) {
	const {
		Component,
		pageProps: { session, ...pageProps },
	} = props;
	const getLayout = Component.getLayout ?? ((page) => page);
	const host = process.env.HOST_URL;
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>MyMNHS | School Platform</title>
				<meta
					name="description"
					content="The unofficial school platform of Meycauayan National High School! 'Be the Best, Choose MNHS!'"
				/>
				<meta name="url" content={host} />
				<meta
					name="abstract"
					content="The unofficial school platform of Meycauayan National High School - Senior High School! 'Be the Best, Choose MNHS!'"
				/>
				<meta
					name="author"
					content="Alpha Romer Coma, alphacoma18@gmail.com"
				/>
				<meta name="reply-to" content="alphacoma18@gmail.com" />
				<meta name="designer" content="Alpha Romer Coma" />
				<meta name="publisher" content="Alpha Romer Coma" />
				<meta name="owner" content="Alpha Romer Coma" />
				<meta name="target" content="all" />
				<meta name="copyright" content="Alpha Romer Coma" />
				<meta
					name="keywords"
					content="MNHS, MHS, Meycauayan National High School, Be the best"
				/>
				<meta name="Classification" content="Education" />
				<meta name="language" content="EN" />
				<meta name="coverage" content="Worldwide" />
				<meta name="distribution" content="Global" />
				<meta name="rating" content="General" />
				<meta name="subject" content="School" />
				<meta name="topic" content="School" />
				{/* Robot Meta Tags */}
				<meta name="robots" content="all" />
				<meta name="Googlebot" content="all" />
				<meta name="Bingbot" content="all" />
				<meta name="Baiduspider" content="all" />
				<meta name="YandexBot" content="all" />
				<meta name="revisit-after" content="2 days" />
				{/* Open Graph Meta Tags */}
				<meta property="og:title" content="MyMNHS | School Platform" />
				<meta
					property="og:description"
					content="The unofficial school platform of Meycauayan National High School - Senior High School! 'Be the Best, Choose MNHS!'"
				/>
				<meta property="og:url" content={host} />
				<meta
					property="og:site_name"
					content="MyMNHS | School Platform"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content={`${host}/logo/og_blue.png`}
				/>
				<meta property="og:image:type" content="image/png" />
				<meta
					property="og:image:alt"
					content="Meycauayan National High School Logo"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:locale" content="en_US" />
				<meta name="og:country-name" content="Philippines" />
				<meta property="og:email" content="alphacoma18@gmail.com" />
				<meta property="og:locale:alternative" content="ja_JP" />
				{/* <meta property="fb:app_id" content="5945161925561758" /> */}
				{/* <meta property="fb:pages" content="104838309260260" /> */}
				{/* https://developers.facebook.com/docs/instant-articles/crawler-ingestion/ */}
				{/* <meta property="ia:markup_url" content="{URL}"></meta> */}

				{/* Twitter Meta Tags */}
				<meta
					property="twitter:title"
					content="MyMNHS | School Platform"
				/>
				<meta
					property="twitter:description"
					content="The unofficial school platform of Meycauayan National High School - Senior High School! 'Be the Best, Choose MNHS!'"
				/>

				{/* switch to twitter app card */}
				<meta property="twitter:url" content={host} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:app:country" content="EN" />
				<meta
					name="twitter:image"
					content={`${host}/logo/og_blue.png`}
				/>
				<meta name="twitter:image:type" content="image/png" />
				<meta
					name="twitter:image:alt"
					content="Meycauayan National High School Logo"
				/>
				<meta name="twitter:image:width" content="1200" />
				<meta name="twitter:image:height" content="630" />
				<meta name="twitter:site" content="@senodesuzo" />
				<meta name="twitter:creator" content="@senodesuzo" />
				<link rel="canonical" href={host} />
				{/* Icons and browser stuff */}
				{/* Do not put this meta tag if you want to work and debug with next.js on mobile
				Also check of node.exe is not blocked 
				steps:
				1. firewall & network setting
				2. allow an app through firewall
				3. allow node.exe on public
				*/}
				{/* <meta
					httpEquiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/> */}
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-title"
					content="MyMNHS | School Platform"
				/>
				<meta name="apple-touch-fullscreen" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="#006400"
				/>
				<meta name="application-name" content="MyMNHS" />
				<meta name="msapplication-TileColor" content="#006400" />
				<meta name="msapplication-navbutton-color" content="#006400" />
				<meta
					name="msapplication-TileImage"
					content="/mstile-144x144.png"
				/>
				<meta
					name="msapplication-config"
					content="/browserconfig.xml"
				/>
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content="#006400" />
				<meta name="format-detection" content="telephone=no" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="194x194"
					href="/favicon-194x194.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-chrome-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#006400"
				/>
				<link
					rel="manifest"
					href="/manifest.webmanifest"
					crossOrigin="use-credentials"
				/>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, minimum-scale=1.0, shrink-to-fit=no, viewport-fit=cover"
				/>
				<Partytown debug={true} forward={["dataLayer.push"]} />
			</Head>
			{getLayout(
				<SessionProvider session={session}>
					<ContextProviderGlobal>
						<NextNProgress
							// puts the loader at the bottom right
							color={"#006400"}
							transformCSS={(css) => {
								return (
									<style>
										{css.replace(
											"top: 15px;",
											"bottom: 15px;",
										)}
									</style>
								);
							}}
						/>
						{/* <div
							style={{
								background: "#006400",
								height: "3px",
								position: "fixed",
								width: "100%",
								zIndex: 100,
							}}
						></div> */}
						<main>
							<Component {...pageProps} />
							<Analytics />
						</main>
					</ContextProviderGlobal>
				</SessionProvider>,
			)}
		</>
	);
}

export default MyApp;
