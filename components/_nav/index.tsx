import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import LeftMenu from "./left";
import RightMenu from "./right";
import MobileMiddle from "./mobileMid";
const Nav: React.FC = () => {
	return (
		<>
			<nav className={styles.topNavigation}>
				<LeftMenu />
				<MobileMiddle />
				<div className={styles.middleNavDiv}>
					<Link href={"/"}>
						<a className={styles.navLink}>
							<i className="icon-home">
								<span>Home</span>
							</i>
						</a>
					</Link>
					<Link href={"/messages"}>
						<a className={styles.navLink}>
							<i className="icon-chat">
								<span>Messages</span>
							</i>
						</a>
					</Link>
					<Link href={"/schoolForum"}>
						<a className={styles.navLink}>
							<i className="icon-tasks">
								<span>School Forum</span>
							</i>
						</a>
					</Link>
					<Link href={"/classSchedule"}>
						<a className={styles.navLink}>
							<i className="icon-calendar">
								<span>Class Schedule</span>
							</i>
						</a>
					</Link>
					<Link href={"/schoolSurveys"}>
						<a className={styles.navLink}>
							<i className="icon-wpforms">
								<span>Forms and surveys</span>
							</i>
						</a>
					</Link>
				</div>
				<RightMenu />
			</nav>
		</>
	);
};

export default Nav;
