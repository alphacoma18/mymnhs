import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Meta from "../../components/meta";
import { axios } from "../../axios/axios";
import { useRouter } from "next/router";
const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");
	const router = useRouter();

	async function handleLogin(e: React.FormEvent<HTMLFormElement>): Promise<boolean | void> {
		e.preventDefault();
		let res = await axios.post('/login', {
			email,
			password
		})
		if (res.data.error) return setError(res.data.error);
		return router.push('/');
	}
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
							<button type="button">Need an account?</button>
							<button type="reset">Clear Fields</button>
							<button type="submit">Link Start!</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
