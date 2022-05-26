import "../styles/globals.css";
import "../public/attachables/fontello-alpha/fontello-fba870b0/css/fontello.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { AuthProvider } from "../_operations/context/AuthProvider";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>MyMNHS | School Platform</title>
				<meta
					name="author"
					content="Alpha Romer Coma, alphacoma18@gmail.com"
				/>
				<meta
					name="description"
					content="The unofficial school platform of Meycauayan National High School - Senior High School! 'Be the Best, Choose MNHS!'"
				/>
				<meta name="Classification" content="Education" />
				<meta name="url" content="https://mymnhs.vercel.app" />
				<meta
					name="identifier-URL"
					content="https://mymnhs.vercel.app"
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
				<meta property="og:title" content="MyMNHS | School Platform" />
				<meta
					property="og:site_name"
					content="MyMNHS | School Platform"
				/>
				<meta
					property="og:description"
					content="The unofficial school platform of Meycauayan National High School - Senior High School! 'Be the Best, Choose MNHS!'"
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
				<meta property="og:url" content="https://mymnhs.vercel.app" />
				<meta property="og:locale" content="en_US" />
				<meta property="site_name" content="MyMNHS | School Platform" />
				<meta property="og:email" content="alphacoma18@gmail.com" />
				<meta property="og:locale:alternative" content="ja_JP" />

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="MyMNHS | School Platform" />
				<meta name="twitter:app:country" content="EN" />
				<meta
					name="twitter:description"
					content="The unofficial school platform of Meycauayan National High School - Senior High School! 'Be the Best, Choose MNHS!'"
				/>
				<meta
					name="twitter:image"
					content="https://mymnhs.vercel.app/attachables/campus-images/image1.jpg"
				/>
				<meta
					name="twitter:image:alt"
					content="Meycauayan National High School Campus Picture"
				/>

				<meta name="twitter:site" content="@senodesuzo" />
				<meta name="twitter:creator" content="@senodesuzo" />
				<meta name="twitter:url" content="https://mymnhs.vercel.app" />

				{/* Devices */}
				<meta name="mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-title"
					content="MyMNHS | School Platform"
				/>
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-touch-fullscreen" content="yes" />

				<meta name="msapplication-TileColor" content="#006400" />
				<meta name="theme-color" content="#006400" />
				<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> 
			</Head>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</>
	);
}

export default MyApp;
