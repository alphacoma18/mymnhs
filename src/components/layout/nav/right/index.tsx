import React, { useContext, useState } from "react";
import MnhsLogo from "../../../components/_mnhsLogo";
// import AuthContext from "../../../utils/context/AuthProvider";
import styles from "./index.module.css";
const RightMenu: React.FC = () => {
	// const { user } = useContext(AuthContext);
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
					{/* <h3>
						{user?.account_first_name} {user?.account_last_name}
					</h3>
					<h4>
						{user?.section_grade} {user?.section_strand}{" "}
						{user?.section_name}
					</h4> */}
					<hr className="horizontalRuleYellow" />
				</div>
			</div>
		</>
	);
};

export default RightMenu;
