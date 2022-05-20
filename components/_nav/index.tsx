import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import LeftMenu from "./left";
import RightMenu from "./right";
const Nav: React.FC = () => {
	return (
		<>
			<nav className={styles.topNavigation}>
				<LeftMenu />

				<div className={styles.middleNavDiv}>
					<Link href={"/"}>
						<a className={styles.navLink}>
							<i className="icon-home">Home</i>
						</a>
					</Link>
					<Link href={"/messages"}>
						<a className={styles.navLink}>
							<i className="icon-chat">Messages</i>
						</a>
					</Link>
					<Link href={"/schoolForum"}>
						<a className={styles.navLink}>
							<i className="icon-tasks">School Forum</i>
						</a>
					</Link>
					<Link href={"/classSchedule"}>
						<a className={styles.navLink}>
							<i className="icon-calendar">Class Schedule</i>
						</a>
					</Link>
					<Link href={"/schoolSurveys"}>
						<a className={styles.navLink}>
							<i className="icon-info-circled">School Surveys</i>
						</a>
					</Link>
				</div>
				<RightMenu />
			</nav>
		</>
	);
};

export default Nav;
