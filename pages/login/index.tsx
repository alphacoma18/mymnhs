import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import MnhsLogo from "../../components/_mnhsLogo";
import Meta from "../../components/_meta";
import Link from "next/link";
import { axios } from "../../_operations/axios/axios";
import { useRouter } from "next/router";
const Login: React.FC = () => {
	const router = useRouter();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [showError, setShowError] = useState<boolean>(false);
	const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

	async function handleLogin(
		e: React.FormEvent<HTMLFormElement>
	): Promise<boolean | void> {
		e.preventDefault();
		setSubmitDisabled((e) => !e);
		try {
			await axios.post("/login", {
				email,
				password,
			});
			await router.push("/");
			return window.location.reload();
		} catch (error: any) {
			let status: number = error.response.status;
			let message: string = error.response.data.message;
			setSubmitDisabled((e) => !e);
			if (status === 401) return setError(message), setShowError(true);
			if (status === 403) return setError(message), setShowError(true);
			if (status === 500) return setError(message), setShowError(true);
			return void 0;
		}
	}
	useEffect((): void => {
		setShowError(false);
		return void 0;
	}, [email, password]);

	return (
		<>
			<Meta
				title="Login Page | MyMNHS"
				description="Welcome to the official school platform of Meycauayan National High School. Login to your account to access your account. Be the best, choose MNHS!"
				url="/login"
				ogTitle="Login Page | MyMNHS"
				ogDescription="Welcome to the official school platform of Meycauayan National High School. Login to your account to access your account. Be the best, choose MNHS!"
				ogUrl="/login"
				twitterTitle="Login Page | MyMNHS"
				twitterDescription="Welcome to the official school platform of Meycauayan National High School. Login to your account to access your account. Be the best, choose MNHS!"
				twitterUrl="/login"
			/>

			<section className={styles.outermostLogin}>
				<div className={styles.loginFill}>
					<div className={styles.loginFormat}>
						<form
							method="post"
							onSubmit={handleLogin}
							className={styles.formStyle}
						>
							<MnhsLogo />

							<h2>School Platform Login&nbsp;Form</h2>
							<hr className={"horizontalRule"} />
							<div
								className={showError ? "errorDivX" : "errorDiv"}
							>
								<h4>{error}</h4>
							</div>
							<label>Account Email Address:</label>
							<input
								type="email"
								placeholder=">>> Enter your email"
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setEmail(e.currentTarget.value)}
								value={email}
								autoFocus
								autoComplete="off"
								minLength={10}
								maxLength={50}
								required
							/>
							<label>Account Password:</label>
							<input
								type="password"
								placeholder=">>> Enter your password"
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setPassword(e.currentTarget.value)}
								value={password}
								autoComplete="off"
								minLength={10}
								maxLength={50}
								required
							/>
							<div>
								<Link href="/signup">
									<button type="button">
										<a>Need an account?</a>
									</button>
								</Link>
								<Link href="/forgot-password">
									<button type="button">
										<a>Forgot password?</a>
									</button>
								</Link>
								<button type="submit" disabled={submitDisabled}>
									Link Start!
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
