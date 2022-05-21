import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
const MobileMiddle: React.FC = () => {
	const [show, setShow] = React.useState<boolean>(false);
	const toggleStyle: { height: string } = {
		height: show ? "100%" : "0",
	};
	return (
		<>
			<button
				type="button"
				title="Toggle Page Routes"
				className={styles.toggleButton}
				onClick={() => setShow(!show)}
			>
				Toggle Pages
			</button>
			<div className={styles.outermostToggle} style={toggleStyle}>
				<a className={styles.closeMenu} onClick={() => setShow(!show)}>
					&times;
				</a>
				<div className={styles.mainToggle}>
					<div className={styles.itemHorizontalRule}>
						<hr className={"horizontalRuleYellow"} />
					</div>
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
							<i className="icon-info-circled">
								<span>Forms and surveys</span>
							</i>
						</a>
					</Link>
					<div className={styles.itemHorizontalRule}>
						<hr className={"horizontalRuleYellow"} />
					</div>
					<div>
						<p>Copyright &copy; 2022.</p>
						<p>Meycauayan National High School</p>
						<p>All Rights Reserved</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileMiddle;
