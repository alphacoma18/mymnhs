// import emailSignin from "@/utils/mailer/templates/signin";
import Mailer, { serverDetails } from "@/utils/mailer";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		EmailProvider({
			server: serverDetails,
			from: serverDetails.from,
			async sendVerificationRequest({ identifier: email, url }) {
				await Mailer({
					recipient: email,
					subject: "Sign in to MyMNHS | School Platform",
					// TODO
					// html: emailSignin({ url }),
				});
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	events: {
		async signIn({ isNewUser }) {
			if (!isNewUser) return;
			// TODO
		},
	},
	pages: {
		signIn: "/auth/signin",
		signOut: "/auth/signout",
		// error: "/auth/error",
		// verifyRequest: "/auth/verify-request",
		// newUser: "/auth/new-user",
	},
	theme: {
		colorScheme: "auto",
		brandColor: "#006400",
		logo: `${process.env.HOST_URL}/android-chrome-256x256.png`,
		buttonText: "#006400",
	},
	debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
