import React, { useState } from "react";
import MnhsLogo from "../../_mnhsLogo";
import styles from "./index.module.css";
const RightMenu: React.FC = () => {
	const [show, setShow] = useState<boolean>(false);

	return (
		<>
			<section>
				<button
					type="button"
					className={styles.menuContainer}
					title="Toggle Right Side Menu"
					onClick={() => setShow((prev) => !prev)}
				>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
				</button>
			</section>
			<div
				className={
					show ? styles.outerRightMenuX : styles.outerRightMenu
				}
			>
				<a
					className={styles.closeMenu}
					onClick={() => setShow((prev) => !prev)}
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
