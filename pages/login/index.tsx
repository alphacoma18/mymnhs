import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	function handleLogin(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault();

		return void 0;
	}
	return (
		<>
			<section className={styles.outermostLogin}>
				<div className={styles.loginFill}>
					<div className={styles.loginFormat}>
						<form method="post" onSubmit={handleLogin}>
							<div className={styles.imagePositioner}>
								<Image
									src={"/mnhs_favicon_og.ico"}
									height={120}
									width={120}
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
							/>
							<label>Account Password:</label>
							<input
								type="password"
								placeholder=">>> Enter your password"
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setPassword(e.currentTarget.value)}
								value={password}
								minLength={10}
								maxLength={50}
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
