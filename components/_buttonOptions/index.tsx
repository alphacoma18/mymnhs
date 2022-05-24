import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
interface Props {
	placeholderB: string;
	placeholderH?: string;
	createButton: boolean;
	deleteButton?: boolean;
	updateButton?: boolean;
	maxLengthB?: number;
	maxLengthH?: number;
}
const ButtonOptions: React.FC<Props> = ({
	placeholderB,
	placeholderH,
	createButton,
	deleteButton,
	updateButton,
	maxLengthB,
	maxLengthH,
}) => {
	const [isActive, setIsActive] = useState<boolean>(true);
	const [isCreate, setIsCreate] = useState<boolean>(false);
	const [isUpdate, setIsUpdate] = useState<boolean>(false);
	const [isDelete, setIsDelete] = useState<boolean>(false);

	const [createBody, setCreateBody] = useState<string>("");
	const [createHeader, setCreateHeader] = useState<string>("");
	const [updateBody, setUpdateBody] = useState<string>("");
	const [updateHeader, setUpdateHeader] = useState<string>("");

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
			{isActive && true && (
				<button
					type="button"
					title="Toggle Create"
					className={styles.createButton}
					onClick={() => setIsCreate(!isCreate)}
				>
					<i className="icon-paper-plane"></i>
				</button>
			)}

			{isActive && true && (
				<button
					type="button"
					title="Toggle Update"
					className={styles.updateButton}
					onClick={() => setIsUpdate(!isUpdate)}
				>
					<i className="icon-arrows-cw"></i>
				</button>
			)}

			{isActive && true && (
				<button
					type="button"
					title="Toggle Delete"
					className={styles.deleteButton}
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
				<div className={styles.optionFormatter}>
					<form method="post" className={styles.optionForms}>
						<h2 className={styles.optionH2Header}>Option Create</h2>
						<hr className="horizontalRuleYellow" />
						{placeholderH ?? (
							<textarea
								placeholder={placeholderH}
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
							maxLength={maxLengthB}
							className={styles.questionTextAreaB}
							onChange={(
								e: React.ChangeEvent<HTMLTextAreaElement>
							) => setCreateBody(e.currentTarget.value)}
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
			</div>

			<div
				className={styles.outerOptionsDivs}
				style={{ height: isUpdate ? "100%" : "0px" }}
			>
				<div className={styles.optionFormatter}>
					<form method="post" className={styles.optionForms}>
						<h2 className={styles.optionH2Header}>Option Update</h2>
						<hr className="horizontalRuleYellow" />
						{placeholderH ?? (
							<textarea
								placeholder={placeholderH}
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
							maxLength={maxLengthB}
							className={styles.questionTextAreaB}
							onChange={(
								e: React.ChangeEvent<HTMLTextAreaElement>
							) => setUpdateBody(e.currentTarget.value)}
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
			</div>
		</>
	);
};

export default ButtonOptions;
