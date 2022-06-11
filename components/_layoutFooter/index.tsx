import React from "react";
import Nav from "../_nav";
import Footer from "../_footer";
import styles from "./index.module.css";
type Props = {
	page: React.ReactNode;
};
const LayoutFooter: React.FC<Props> = ({ page }) => {
	return (
		<>
			<main className={styles.outermostMain}>
				<Nav />
				<div className={styles.pageFormatter}>{page}</div>
				<Footer />
			</main>
		</>
	);
};

export default LayoutFooter;
