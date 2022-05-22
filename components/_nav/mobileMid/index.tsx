import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import FlexHRule from "../../_flexHRule";
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
			></button>
			<div className={styles.outermostToggle} style={toggleStyle}>
				<a className={styles.closeMenu} onClick={() => setShow(!show)}>
					&times;
				</a>
				<div className={styles.mainToggle}>
					<FlexHRule />
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
					<FlexHRule />
					<a className={styles.navLink}>
						<i className="icon-rebel">
							<span>MNHS School Blog</span>
						</i>
					</a>
					<a className={styles.navLink} href="https://mnhs-shs.github.io/unofficial-site/">
						<i className="icon-globe">
							<span>MNHS Public Webpage</span>
						</i>
					</a>
					<a className={styles.navLink} href="https://www.facebook.com/ssgovt">
						<i className="icon-first-order">
							<span>MNHS Student Council</span>
						</i>
					</a>
					<a className={styles.navLink} href="https://www.facebook.com/meycauayannationalhsseniorhigh">
						<i className="icon-facebook-squared">
							<span>MNHS Facebook</span>
						</i>
					</a>
					<a className={styles.navLink} href="https://www.youtube.com/channel/UCC3ek2xens8AVd60PvNix1Q/videos">
						<i className="icon-youtube-squared">
							<span>MNHS YouTube</span>
						</i>
					</a>
					<a className={styles.navLink} href="https://twitter.com/meycauayannhs">
						<i className="icon-twitter-squared">
							<span>MNHS Twitter</span>
						</i>
					</a>
					<a className={styles.navLink} href="https://github.com/mnhs-shs">
						<i className="icon-github-squared">
							<span>MNHS Github</span>
						</i>
					</a>
					<FlexHRule />
					<p>Copyright &copy; 2022.</p>
					<p>Meycauayan National High School</p>
					<p>All Rights Reserved</p>
				</div>
			</div>
		</>
	);
};

export default MobileMiddle;
