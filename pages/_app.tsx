import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import "../public/attachables/fontello-alpha/fontello-fba870b0/css/fontello.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../utils/context/AuthProvider";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			></Script>
			<Script strategy="lazyOnload" id="googletagmanager">
				{`window.dataLayer = window.dataLayer || [];
  					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

  					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
			</Script>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
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
				<meta name="copyright" content="Kinabukasan Production" />
				<meta
					name="keywords"
					content="MNHS, Meycauayan, Meycauayan National High School, School Platform, Official Website, Be the best, Choose MNHS, Senior High School"
				/>
				<meta name="Classification" content="Education" />
				<meta name="language" content="EN" />
				<meta name="coverage" content="Worldwide" />
				<meta name="distribution" content="Global" />
				<meta name="rating" content="General" />
				<meta name="subject" content="School Community" />
				<meta name="topic" content="Education" />
				<meta
					name="abstract"
					content="The unofficial school platform of Meycauayan National High School - Senior High School! 'Be the Best, Choose MNHS!'"
				/>

				{/* Robot Meta Tags */}
				<meta name="robots" content="all" />
				<meta name="Googlebot" content="all" />
				<meta name="Bingbot" content="all" />
				<meta name="Bingbot" content="all" />
				<meta name="Baiduspider" content="all" />
				<meta name="YandexBot" content="all" />
				<meta name="revisit-after" content="2 days" />

				{/* Open Graph Meta Tags */}
				<meta property="fb:app_id" content="111960098045066" />
				<meta
					property="og:site_name"
					content="MyMNHS | School Platform"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://mymnhs.vercel.app/attachables/campus-images/image1.jpg"
				/>
				<meta property="og:image:type" content="image/jpg" />
				<meta
					property="og:image:alt"
					content="Meycauayan National High School Campus Picture"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:locale" content="en_US" />
				<meta name="og:country-name" content="Philippines" />
				<meta name="og:postal-code" content="3020" />
				<meta property="site_name" content="MyMNHS | School Platform" />
				<meta property="og:email" content="alphacoma18@gmail.com" />
				<meta property="og:locale:alternative" content="ja_JP" />

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:app:country" content="EN" />
				<meta
					name="twitter:image"
					content="https://mymnhs.vercel.app/attachables/campus-images/image1.jpg"
				/>
				<meta name="twitter:image:type" content="image/jpg" />
				<meta
					name="twitter:image:alt"
					content="Meycauayan National High School Campus Picture"
				/>
				<meta name="twitter:image:width" content="1200" />
				<meta name="twitter:image:height" content="630" />
				<meta name="twitter:site" content="@senodesuzo" />
				<meta name="twitter:creator" content="@senodesuzo" />

				{/* Icons and browser stuff */}
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="attachables/favicons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="attachables/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="attachables/favicons/favicon-16x16.png"
				/>
				<link
					rel="mask-icon"
					href="attachables/favicons/safari-pinned-tab.svg"
					color="#006400"
				/>
				<meta name="apple-mobile-web-app-title" content="MyMNHS" />
				<meta name="application-name" content="MyMNHS" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta
					name="msapplication-TileImage"
					content="images/favicons/mstile-144x144.png"
				/>

				<meta name="msapplication-navbutton-color" content="#006400" />
				<link
					rel="shortcut icon"
					href="attachables/favicons/favicon.ico"
				/>
				<link
					rel="manifest"
					crossOrigin="use-credentials"
					href="/manifest.json"
				/>
				<meta name="mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="#006400"
				/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-touch-fullscreen" content="yes" />

				<meta name="theme-color" content="#006400" />
				<meta name="format-detection" content="telephone=no" />
				<meta
					httpEquiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				/>
			</Head>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</>
	);
}

export default MyApp;
