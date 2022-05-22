import React, { useState } from "react";
import MnhsLogo from "../../_mnhsLogo";
import styles from "./index.module.css";
const RightMenu: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleStyle: { width: string } = {
		width: isOpen ? "275px" : "0px",
	};
	return (
		<>
			<section>
				<button
					type="button"
					className={styles.menuContainer}
					title="Toggle Right Side Menu"
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
				</button>
			</section>
			<div className={styles.outerRightMenu} style={toggleStyle}>
				<a
					className={styles.closeMenu}
					onClick={() => setIsOpen(!isOpen)}
				>
					&times;
				</a>
				<div className={styles.mainRightMenu}>
					<MnhsLogo />
				</div>
			</div>
		</>
	);
};

export default RightMenu;
