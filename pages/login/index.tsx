import React, { useState, useContext, useEffect } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Meta from "../../components/meta";
import Link from "next/link";
import { axios } from "../../_operations/axios/axios";
import { useRouter } from "next/router";
import AuthContext from "../../_operations/context/AuthProvider";
const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [showError, setShowError] = useState<boolean>(false);
	const router: any = useRouter();
	const { login } = useContext(AuthContext);

	async function handleLogin(
		e: React.FormEvent<HTMLFormElement>
	): Promise<boolean | void> {
		e.preventDefault();
		try {
			let res = await axios.post("/login", {
				email,
				password,
			});
			login(res.data.user);
			return router.replace("/");
		} catch (error: any) {
			let status: number = error.response.status;
			let message: string = error.response.data.message;

			if (status === 401) return setError(message), setShowError(true);
			if (status === 403) return setError(message), setShowError(true);
			if (status === 500) return setError(message), setShowError(true);
		}
	}
	function handleClear(): void {
		setEmail("");
		setPassword("");
		return void 0;
	}
	useEffect((): void => {
		setShowError(false);
		return void 0;
	}, [email, password]);

	return (
		<>
			<Meta
				title="MNHS | Login Page"
				description="Login to the school platform and seamlessly converse with fellow students at blazingly fast speeds!"
				ogTitle="MNHS | Login Page"
				ogDescription="Login to the school platform and seamlessly converse with fellow students at blazingly fast speeds!"
				twitterTitle="MNHS | Login Page"
				twitterDescription="Login to the school platform and seamlessly converse with fellow students at blazingly fast speeds!"
			/>

			<section className={styles.outermostLogin}>
				<div className={styles.loginFill}>
					<div className={styles.loginFormat}>
						<form method="post" onSubmit={handleLogin}>
							<div className={styles.imagePositioner}>
								<Image
									src={
										"/attachables/mnhs-images/logos/login_logo.png"
									}
									height={120}
									width={120}
									alt="MNHS Logo"
									title="The Meycauayan National High School Logo"
								/>
							</div>
							<h2>Student Log In Form</h2>
							<hr className={"horizontalRule"} />
							<div
								className={styles.errorDiv}
								style={{
									display: showError ? "block" : "none",
								}}
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
							<Link href="/signup">
								<button type="button">
									<a>Need an account?</a>
								</button>
							</Link>
							<button type="reset" onClick={handleClear}>
								Clear Fields
							</button>
							<button type="submit">
								<Link href="/" hidden>
									<a hidden></a>
								</Link>
								Link Start
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
