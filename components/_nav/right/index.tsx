import React from "react";
import MnhsLogo from "../../_mnhsLogo";
import styles from "./index.module.css";
import Link from "next/link";
const RightMenu: React.FC = () => {
	return (
		<>
			<section>
				<button
					type="button"
					className={styles.menuContainer}
					title="Toggle Left Side Menu"
				>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
				</button>
			</section>
		</>
	);
};

export default RightMenu;