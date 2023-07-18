import React from "react";
import Nav from "../nav";
import Footer from "../footer";
import styles from "./index.module.css"
type Props = {
	children: React.ReactNode;
};
const Layout1: React.FC<Props> = ({ children }) => {
	return (
		<>
			<main className={styles.outermostMain}>
				<Nav />
				<div className={styles.pageFormatter}>{children}</div>
				<Footer />
			</main>
		</>
	);
};

export default Layout1;
