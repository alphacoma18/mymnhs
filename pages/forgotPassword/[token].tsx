import React, { useEffect, useState } from "react";
import styles from "./token.module.css";
import Meta from "../../components/_meta";
import MnhsLogo from "../../components/_mnhsLogo";
import { axios } from "../../_operations/axios/axios";
import { useRouter } from "next/router";
const Reset: React.FC = () => {
	const router = useRouter();
	const [newPassword, setNewPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [showError, setShowError] = useState<boolean>(false);

	async function handleSubmit(
		e: React.FormEvent<HTMLFormElement>
	): Promise<boolean | void> {
		try {
			e.preventDefault();
			if (newPassword !== confirmPassword)
				return setError("Passwords do not match."), setShowError(true);
			const url: string = router.asPath;
			const token: string = url.split("/")[2];

			await axios.post(`/forgotPassword/${token}`, {
				newPassword,
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
	}, [newPassword, confirmPassword]);
	return (
		<>
			<Meta
				title="Reset Password | MyMNHS"
				description="Welcome back! Enter your new password below."
				url="/forgotPassword/[token]"
				ogTitle="Reset Password | MyMNHS"
				ogDescription="Welcome back! Enter your new password below."
				ogUrl="/forgotPassword/[token]"
				twitterTitle="Reset Password | MyMNHS"
				twitterDescription="Welcome back! Enter your new password below."
				twitterUrl="/forgotPassword/[token]"
			/>
			<section className={styles.outermostResetPass}>
				<div className={styles.resetPassFill}>
					<div className={styles.resetPassFormat}>
						<form
							method="post"
							className={styles.formStyle}
							onSubmit={handleSubmit}
						>
							<MnhsLogo />
							<h2>Password Reset Form</h2>
							<hr className="horizontalRule" />
							<div
								className="errorDiv"
								style={{
									display: showError ? "block" : "none",
								}}
							>
								<h4>{error}</h4>
							</div>
							<p>Welcome back! Enter your new password below </p>
							<label>New Password:</label>
							<input
								type="password"
								placeholder=">>> Enter your new password"
								minLength={10}
								maxLength={30}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setNewPassword(e.currentTarget.value)}
								value={newPassword}
								autoFocus
								autoComplete="off"
								required
							/>
							<label>Confirm Password:</label>
							<input
								type="password"
								placeholder=">>> Confirm your new password"
								minLength={10}
								maxLength={30}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setConfirmPassword(e.currentTarget.value)}
								value={confirmPassword}
								autoComplete="off"
								required
							/>
							<div>
								<br />
							</div>
							<button type="submit">Reset Password</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Reset;
