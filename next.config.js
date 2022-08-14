/** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa");

// module.exports = withPWA({
// 	reactStrictMode: true,
// 	pwa: {
// 		disable: process.env.NODE_ENV === "development",
// 		register: true,
// 		scope: "/app",
// 		sw: "service-worker.js",
// 		//...
// 	},
// });

const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "production";
const nextConfig = withPWA({
	reactStrictMode: true,
	pwa: {
		dest: "public",
		disable: prod ? false : true,
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === "development",
	},
});

module.exports = nextConfig;
