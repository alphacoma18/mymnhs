import React, { useState } from "react";
import styles from "./index.module.css";
import MnhsLogo from "../../components/_mnhsLogo";
import Meta from "../../components/_meta";
import Link from "next/link";
import { axios } from "../../_operations/axios/axios";
import { useRouter } from "next/router";
const ForgotPassword: React.FC = () => {
	const router = useRouter();
	const [email, setEmail] = useState<string>("");
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      await axios.post("/forgotPassword", {
        email,
      });
	  return router.push("/login");
    } catch (error) {
		return console.log(error);
    }
	}
	return (
		<>
			<Meta
				title="MNHS | Forgot Password"
				description="Forgot your password? No worries! We'll send you a link to reset your password."
				ogTitle="MNHS | Forgot Password"
				ogDescription="Forgot your password? No worries! We'll send you a link to reset your password."
				twitterTitle="MNHS | Forgot Password"
				twitterDescription="Forgot your password? No worries! We'll send you a link to reset your password."
			/>
			<section className={styles.outermostForgot}>
				<div className={styles.forgotFill}>
					<div className={styles.forgotFormat}>
						<form
							method="post"
							className={styles.formStyle}
							onSubmit={handleSubmit}
						>
							<MnhsLogo />
							<h2>Forgot Password Form</h2>
							<hr className="horizontalRule" />
							<p>
								Forgot your password? No worries! Enter your
								email address below and we'll send you a link to
								reset your password via gmail.
							</p>
							<label>Account Email Address:</label>
							<input
								type="email"
								placeholder=">>> Enter your email"
								autoFocus
								autoComplete="off"
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setEmail(e.currentTarget.value)}
								value={email}
								minLength={10}
								maxLength={30}
								required
							/>
							<div>
								<br />
							</div>
							<div className={styles.buttonDiv}>
								<Link href={"login"}>
									<button
										type="submit"
										className={styles.submitButton}
									>
										<a>Back to login</a>
									</button>
								</Link>

								<button type="submit">Send Reset Link</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default ForgotPassword;
