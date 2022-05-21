import React from "react";
import Nav from "../_nav";
import styles from "./index.module.css";
type Props = {
	page: React.ReactNode;
};
const Layout: React.FC<Props> = ({ page }) => {
	return (
		<>
			<main className={styles.outermostMain}>
				<Nav />
				<div className={styles.pageFormatter}>{page}</div>
			</main>
		</>
	);
};

export default Layout;
