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
	const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

	async function handleSubmit(
		e: React.FormEvent<HTMLFormElement>
	): Promise<boolean | void> {
		try {
			e.preventDefault();
			setSubmitDisabled((e) => !e);
			if (newPassword !== confirmPassword)
				return setError("Passwords do not match."), setShowError(true);
			const url: string = router.asPath;
			const token: string = url.split("/")[2];

			await axios.post(`/forgot-password/${token}`, {
				newPassword,
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
	}, [newPassword, confirmPassword]);
	return (
		<>
			<Meta
				title="Reset Password | MyMNHS"
				description="Welcome back! Enter your new password below. Be the best, choose MNHS!"
				url="/forgot-password/[token]"
				ogTitle="Reset Password | MyMNHS"
				ogDescription="Welcome back! Enter your new password below. Be the best, choose MNHS!"
				ogUrl="/forgot-password/[token]"
				twitterTitle="Reset Password | MyMNHS"
				twitterDescription="Welcome back! Enter your new password below. Be the best, choose MNHS!"
				twitterUrl="/forgot-password/[token]"
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
								className={showError ? "errorDivX" : "errorDiv"}
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
							<button type="submit" disabled={submitDisabled}>
								Reset Password
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Reset;
