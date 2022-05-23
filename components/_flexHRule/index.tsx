import React from "react";
import styles from "./index.module.css";

const FlexHRule: React.FC = () => {
	return (
		<div className={styles.outermostDiv}>
			<hr className="horizontalRuleYellow" />
		</div>
	);
};

export default FlexHRule;
