import React from "react";
import Nav from "../nav";
import styles from "./index.module.css";
type Props = {
	children: React.ReactNode;
};
const Layout2: React.FC<Props> = ({ children }) => {
	return (
		<>
			<main className={styles.outermostMain}>
				<Nav />
                <div className={styles.pageFormatter}>{children}</div>
			</main>
		</>
	);
};

export default Layout2;
