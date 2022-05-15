import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import MnhsLogo from "../../components/_mnhsLogo";
import Meta from "../../components/_meta";
import sectionGetter from "../../components/signup";
import Map from "../../components/signup/map";
import { axios } from "../../_operations/axios/axios";
import { useRouter } from "next/router";
const Signup: React.FC = () => {
	const router = useRouter();
	const [firstShow, setFirstShow] = useState<boolean>(true);
	const [secondShow, setSecondShow] = useState<boolean>(false);
	const [thirdShow, setThirdShow] = useState<boolean>(false);
	const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

	function handleFirst(): void {
		setFirstShow((e) => !e);
		setSecondShow((e) => !e);
		return void 0;
	}
	function handleSecond(): void {
		setSecondShow((e) => !e);
		setThirdShow((e) => !e);
		return void 0;
	}
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [grade, setGrade] = useState<string>("");
	const [strand, setStrand] = useState<string>("");
	const [section, setSection] = useState<string>("");

	const [sectionList, setSectionList] = useState<string[] | void>([]);

	useEffect((): void => {
		setSectionList(sectionGetter(grade, strand));
		return void 0;
	}, [grade, strand]);

	async function handleSubmit(
		e: React.FormEvent<HTMLFormElement>
	): Promise<boolean | void> {
		e.preventDefault();
		setFormSubmitted((e) => !e);
		try {
			await axios.post("/signup", {
				firstName,
				lastName,
				email,
				password,
				section,
			});
			return router.push("/login");
		} catch (e: any) {
			alert(e.response.data.message);
		}
	}

	return (
		<>
			<Meta
				title="MNHS | Signup Page"
				description="Signup to the school platform and seamlessly converse with fellow students at blazingly fast speeds!"
				ogTitle="MNHS | Signup Page"
				ogDescription="Signup to the school platform and seamlessly converse with fellow students at blazingly fast speeds!"
				twitterTitle="MNHS | Signup Page"
				twitterDescription="Signup to the school platform and seamlessly converse with fellow students at blazingly fast speeds!"
			/>
			<section className={styles.outermostSignup}>
				<div className={styles.signupFill}>
					<div className={styles.signupFormat}>
						<div
							className={
								firstShow
									? styles.changeItem
									: styles.changeNone
							}
						>
							<MnhsLogo />
							<hr className="horizontalRule" />
							<p>
								Welcome to the Meycauayan National High School
								unofficial school platform. Sign up and witness
								the latest technical advancements in the web
								brought to you by the ICT Department!
							</p>
							<br />
							<div className={styles.buttonDiv}>
								<Link href={"/"}>
									<button type="button">Back to Login</button>
								</Link>
								<button type="button" onClick={handleFirst}>
									Next Page
								</button>
							</div>
						</div>

						<div
							className={
								secondShow
									? styles.changeItem
									: styles.changeNone
							}
						>
							<MnhsLogo />
							<hr className="horizontalRule" />
							<p>
								After you have filled out the form, a
								verification email will be sent to you. Please
								click on the link in the email to verify your
								account. Once you have verified your account,
								you will be able to login to the system.
							</p>
							<br />
							<p>
								Please keep in mind that We do not sell, trade,
								or rent your personal information to third
								parties. If you have any questions, please do
								not hesitate to contact us at any time.
							</p>
							<div className={styles.buttonDiv}>
								<button
									type="button"
									onClick={handleFirst}
									className={styles.buttonItem}
								>
									Prev Page
								</button>
								<button
									type="button"
									onClick={handleSecond}
									className={styles.buttonItem}
								>
									Next Page
								</button>
							</div>
						</div>

						<div
							className={
								thirdShow
									? styles.changeItem
									: styles.changeNone
							}
						>
							<form
								method="post"
								className={styles.formStyle}
								onSubmit={handleSubmit}
							>
								<h2>Account Sign Up Form</h2>
								<h4>Please fill out the following fields</h4>
								<hr className="horizontalRule" />
								<label className={styles.loginLabel}>
									First Name
								</label>
								<input
									type="text"
									placeholder=">>> Enter your first name"
									onChange={(
										e: React.ChangeEvent<HTMLInputElement>
									) => setFirstName(e.currentTarget.value)}
									value={firstName}
									autoComplete="off"
									autoCorrect="off"
									minLength={2}
									maxLength={30}
									required
								/>
								<label className={styles.loginLabel}>
									Last Name
								</label>
								<input
									type="text"
									placeholder=">>> Enter your last name"
									onChange={(
										e: React.ChangeEvent<HTMLInputElement>
									) => setLastName(e.currentTarget.value)}
									value={lastName}
									autoComplete="off"
									autoCorrect="off"
									minLength={2}
									maxLength={30}
									required
								/>
								<label className={styles.loginLabel}>
									Email Address
								</label>
								<input
									type="email"
									placeholder=">>> Enter your email address"
									onChange={(
										e: React.ChangeEvent<HTMLInputElement>
									) => setEmail(e.currentTarget.value)}
									value={email}
									autoComplete="off"
									autoCorrect="off"
									minLength={10}
									maxLength={30}
									required
								/>
								<label className={styles.loginLabel}>
									Password
								</label>
								<input
									type="password"
									placeholder=">>> Enter your password"
									onChange={(
										e: React.ChangeEvent<HTMLInputElement>
									) => setPassword(e.currentTarget.value)}
									value={password}
									autoComplete="off"
									autoCorrect="off"
									minLength={10}
									maxLength={30}
									required
								/>

								<div className={styles.sectionOuterDiv}>
									<div>
										<label
											htmlFor="grade"
											className={styles.sectionLabel}
										>
											Grade:
										</label>
										<select
											id="grade"
											required
											onChange={(
												e: React.ChangeEvent<HTMLSelectElement>
											) => {
												setGrade(e.currentTarget.value);
											}}
											value={grade}
										>
											<option value="">
												Select Grade
											</option>
											<option value="11">11</option>
											<option value="12">12</option>
										</select>
									</div>

									<div>
										<label
											htmlFor="strand"
											className={styles.sectionLabel}
										>
											Strand:
										</label>
										<select
											id="strand"
											required
											onChange={(
												e: React.ChangeEvent<HTMLSelectElement>
											) => {
												setStrand(
													e.currentTarget.value
												);
											}}
											value={strand}
										>
											<option value="">
												Select Strand
											</option>
											<option value="STEM">STEM</option>
											<option value="HUMMS">HUMMS</option>
											<option value="GAS">GAS</option>
											<option value="ABM">ABM</option>
											<option value="ICT">ICT</option>
											<option value="HE">
												Home Economics
											</option>
										</select>
									</div>
									<div>
										<label
											htmlFor="section"
											className={styles.sectionLabel}
										>
											Section:
										</label>
										<select
											id="section"
											required
											disabled={
												grade && strand ? false : true
											}
											onChange={(
												e: React.ChangeEvent<HTMLSelectElement>
											) => {
												setSection(
													e.currentTarget.value
												);
											}}
											value={section}
										>
											<Map list={sectionList} />
										</select>
									</div>
								</div>
								<div>
									<br />
								</div>
								<div className={styles.buttonDiv}>
									<button
										onClick={handleSecond}
										type="button"
										className={styles.buttonItem}
									>
										Prev Page
									</button>
									<button
										type="submit"
										disabled={formSubmitted ? true : false}
									>
										Send verification
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signup;
