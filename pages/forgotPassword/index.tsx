import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import MnhsLogo from "../../components/_mnhsLogo";
import Meta from "../../components/_meta";
import Link from "next/link";
import { axios } from "../../_operations/axios/axios";
import { useRouter } from "next/router";
const ForgotPassword: React.FC = () => {
	const router = useRouter();
	const [email, setEmail] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [showError, setShowError] = useState<boolean>(false);

	async function handleSubmit(
		e: React.FormEvent<HTMLFormElement>
	): Promise<boolean | void> {
		try {
			e.preventDefault();
			await axios.post("/forgotPassword", {
				email,
			});
			return router.push("/login");
		} catch (error: any) {
			let status: number = error.response.status;
			let message: string = error.response.data.message;

			if (status === 401) return setError(message), setShowError(true);
			if (status === 500) return setError(message), setShowError(true);
			return void 0;
		}
	}
	useEffect((): void => {
		setShowError(false);
		return void 0;
	}, [email]);
	return (
		<>
			<Meta
				title="Forgot Password | MyMNHS"
				description="Forgot your password? No worries! We&apos;ll send you a link to reset your password."
				url="/forgotPassword"
				ogTitle="Forgot Password | MyMNHS"
				ogDescription="Forgot your password? No worries! We&apos;ll send you a link to reset your password."
				ogUrl="/forgotPassword"
				twitterTitle="Forgot Password | MyMNHS"
				twitterDescription="Forgot your password? No worries! We&apos;ll send you a link to reset your password."
				twitterUrl="/forgotPassword"
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
							<div
								className="errorDiv"
								style={{
									display: showError ? "block" : "none",
								}}
							>
								<h4>{error}</h4>
							</div>
							<p>
								Forgot your password? No worries! Enter your
								email address below and we&apos;ll send you a link to
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
