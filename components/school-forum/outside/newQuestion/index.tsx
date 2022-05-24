import React, { useState } from "react";
import styles from "./index.module.css";
import ButtonOptions from "../../../_buttonOptions";
const NewForumQuestion: React.FC = () => {
	const [isActive, setIsActive] = useState<boolean>(true);
	return (
		<>
			<section className={styles.outerNewQuestion}></section>
			<ButtonOptions />
		</>
	);
};

export default NewForumQuestion;
