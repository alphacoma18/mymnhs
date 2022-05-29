import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
interface Props {
	createExecutor: (
		body?: string,
		header?: string,
		url?: string
	) => Promise<boolean | void>;
	placeholderB?: string;
	placeholderH?: string;
	placeholderURL?: string;
	createButton?: boolean;
	deleteButton?: boolean;
	updateButton?: boolean;
	maxLengthB?: number;
	maxLengthH?: number;
	maxLengthURL?: number;
}
const ButtonOptions: React.FC<Props> = ({
	createExecutor,
	placeholderB,
	placeholderH,
	placeholderURL,
	createButton,
	deleteButton,
	updateButton,
	maxLengthB,
	maxLengthH,
	maxLengthURL,
}) => {
	const [isActive, setIsActive] = useState<boolean>(true);
	const [isCreate, setIsCreate] = useState<boolean>(false);
	const [isUpdate, setIsUpdate] = useState<boolean>(false);
	const [isDelete, setIsDelete] = useState<boolean>(false);

	const [createBody, setCreateBody] = useState<string>("");
	const [createHeader, setCreateHeader] = useState<string>("");
	const [createURL, setCreateURL] = useState<string>("");
	const [updateBody, setUpdateBody] = useState<string>("");
	const [updateHeader, setUpdateHeader] = useState<string>("");
	const [updateURL, setUpdateURL] = useState<string>("");

	useEffect((): void => {
		setIsActive(false);
		return void 0;
	}, [isCreate, isUpdate, isDelete]);

	function clearUpdate(): void {
		setUpdateBody("");
		setUpdateHeader("");
		return void 0;
	}
	function clearCreate(): void {
		setCreateBody("");
		setCreateHeader("");
		return void 0;
	}

	async function handleCreate(
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> {
		e.preventDefault();
		await createExecutor(createBody, createHeader, createURL);
		clearCreate();
		setIsCreate(false);
		setIsUpdate(false);
		setIsDelete(false);
		return void 0;
	}

	return (
		<>
			<button
				type="button"
				title="Toggle Actions"
				className={styles.actionToggleButton}
				onClick={() => setIsActive(!isActive)}
			>
				<i
					className="icon-minus-circled"
					style={{ display: isActive ? "block" : "none" }}
				></i>
				<i
					className="icon-plus-circled"
					style={{ display: isActive ? "none" : "block" }}
				></i>
			</button>

			{/* Buttons */}
			{/* Buttons */}
			{/* Buttons */}
			{isActive && createButton && (
				<button
					type="button"
					title="Toggle Create"
					className={styles.createButton}
					onClick={() => setIsCreate(!isCreate)}
				>
					<i className="icon-paper-plane"></i>
				</button>
			)}

			{isActive && updateButton && (
				<button
					type="button"
					title="Toggle Update"
					className={styles.updateButton}
					onClick={() => setIsUpdate(!isUpdate)}
				>
					<i className="icon-arrows-cw"></i>
				</button>
			)}

			{isActive && deleteButton && (
				<button
					type="button"
					title="Toggle Delete"
					className={styles.deleteButton}
					onClick={() => setIsDelete(!isDelete)}
				>
					<i className="icon-trash"></i>
				</button>
			)}

			{/* Options */}
			{/* Options */}
			{/* Options */}

			<div
				className={styles.outerOptionsDivs}
				style={{ height: isCreate ? "100%" : "0px" }}
			>
				<form
					method="post"
					className={styles.optionForms}
					onSubmit={handleCreate}
				>
					<h2 className={styles.optionH2Header}>Option Create</h2>
					<hr className="horizontalRuleYellow" />
					{placeholderURL && (
						<textarea
							placeholder={placeholderURL}
							minLength={10}
							maxLength={maxLengthURL}
							className={styles.questionURL}
							onChange={(
								e: React.ChangeEvent<HTMLTextAreaElement>
							) => setCreateURL(e.currentTarget.value)}
							value={createURL}
						></textarea>
					)}
					{placeholderH && (
						<textarea
							placeholder={placeholderH}
							minLength={10}
							maxLength={maxLengthH}
							className={styles.questionTextAreaH}
							onChange={(
								e: React.ChangeEvent<HTMLTextAreaElement>
							) => setCreateHeader(e.currentTarget.value)}
							value={createHeader}
						></textarea>
					)}
					<textarea
						placeholder={placeholderB}
						minLength={10}
						maxLength={maxLengthB}
						className={styles.questionTextAreaB}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setCreateBody(e.currentTarget.value)
						}
						value={createBody}
					></textarea>
					<div className={styles.optionButtons}>
						<button type="reset" onClick={clearCreate}>
							Clear Fields
						</button>
						<button type="submit">Execute Option</button>
					</div>
				</form>
			</div>

			<div
				className={styles.outerOptionsDivs}
				style={{ height: isUpdate ? "100%" : "0px" }}
			>
				<form method="put" className={styles.optionForms}>
					<h2 className={styles.optionH2Header}>Option Update</h2>
					<hr className="horizontalRuleYellow" />
					{placeholderURL && (
						<textarea
							placeholder={placeholderURL}
							minLength={10}
							maxLength={maxLengthURL}
							className={styles.questionURL}
							onChange={(
								e: React.ChangeEvent<HTMLTextAreaElement>
							) => setUpdateURL(e.currentTarget.value)}
							value={updateURL}
						></textarea>
					)}
					{placeholderH && (
						<textarea
							placeholder={placeholderH}
							minLength={10}
							maxLength={maxLengthH}
							className={styles.questionTextAreaH}
							onChange={(
								e: React.ChangeEvent<HTMLTextAreaElement>
							) => setUpdateHeader(e.currentTarget.value)}
							value={updateHeader}
						></textarea>
					)}
					<textarea
						placeholder={placeholderB}
						minLength={10}
						maxLength={maxLengthB}
						className={styles.questionTextAreaB}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setUpdateBody(e.currentTarget.value)
						}
						value={updateBody}
					></textarea>
					<div className={styles.optionButtons}>
						<button type="reset" onClick={clearUpdate}>
							Clear Fields
						</button>
						<button type="submit">Execute Option</button>
					</div>
				</form>
			</div>

			<div
				className={styles.outerOptionsDivs}
				style={{ height: isDelete ? "100%" : "0px" }}
			>
				<form method="delete" className={styles.optionForms}>
					<h2 className={styles.optionH2Header}>Option Delete</h2>
					<hr className="horizontalRuleYellow" />
					<b className={styles.deleteMessage}>
						Notice: This action cannot be reversed
					</b>
					<p className={styles.deleteMessage}>
						Are you sure you want to proceed to deletion?
					</p>
					<hr className="horizontalRuleYellow" />
					<div className={styles.optionButtons}>
						<button type="submit">Execute Option</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ButtonOptions;
