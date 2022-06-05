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
	const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

	async function handleSubmit(
		e: React.FormEvent<HTMLFormElement>
	): Promise<boolean | void> {
		try {
			e.preventDefault();
			setSubmitDisabled((e) => !e);
			await axios.post("/forgot-password", {
				email,
			});
			return await router.push("/login");
		} catch (error: any) {
			let status: number = error.response.status;
			let message: string = error.response.data.message;
			setSubmitDisabled((e) => !e);
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
				description="Forgot your password? No worries! We'll send you a link to reset your password."
				url="/forgot-password"
				ogTitle="Forgot Password | MyMNHS"
				ogDescription="Forgot your password? No worries! We'll send you a link to reset your password."
				ogUrl="/forgot-password"
				twitterTitle="Forgot Password | MyMNHS"
				twitterDescription="Forgot your password? No worries! We'll send you a link to reset your password."
				twitterUrl="/forgot-password"
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
								className={showError ? "errorDivX" : "errorDiv"}
							>
								<h4>{error}</h4>
							</div>
							<p>
								Forgot your password? No worries! Enter your
								email address below and we&apos;ll send you a
								link to reset your password via gmail.
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
								<Link href={"/login"}>
									<button
										type="submit"
										className={styles.submitButton}
									>
										<a>Back to login</a>
									</button>
								</Link>

								<button type="submit" disabled={submitDisabled}>
									Send Reset Link
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default ForgotPassword;
