import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import FlexHRule from "../../_flexHRule";
import Image from "next/image";
const MobileMiddle: React.FC = () => {
	const [show, setShow] = React.useState<boolean>(false);
	const toggleStyle: { height: string } = {
		height: show ? "100%" : "0px",
	};
	return (
		<>
			<button
				type="button"
				title="Toggle Page Routes"
				className={styles.toggleButton}
				onClick={() => setShow(!show)}
			>
				<Image
					src="/attachables/mnhs-images/logos/login_logo.png"
					width={50}
					height={50}
					alt="MNHS Logo"
				/>
			</button>
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
							<i className="icon-globe">
								<span>Global Chat</span>
							</i>
						</a>
					</Link>
					<Link href={"/school-forum"}>
						<a className={styles.navLink}>
							<i className="icon-tasks">
								<span>School Forum</span>
							</i>
						</a>
					</Link>
					<Link href={"/class-schedule"}>
						<a className={styles.navLink}>
							<i className="icon-calendar">
								<span>Class Schedule</span>
							</i>
						</a>
					</Link>
					<Link href={"/school-surveys"}>
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
					<a
						className={styles.navLink}
						href="https://mnhs-shs.github.io/unofficial-site/"
					>
						<i className="icon-newspaper">
							<span>MNHS Public Webpage</span>
						</i>
					</a>
					<a
						className={styles.navLink}
						href="https://www.facebook.com/ssgovt"
					>
						<i className="icon-first-order">
							<span>MNHS Student Council</span>
						</i>
					</a>
					<a
						className={styles.navLink}
						href="https://www.facebook.com/meycauayannationalhsseniorhigh"
					>
						<i className="icon-facebook-squared">
							<span>MNHS Facebook</span>
						</i>
					</a>
					<a
						className={styles.navLink}
						href="https://www.youtube.com/channel/UCC3ek2xens8AVd60PvNix1Q/videos"
					>
						<i className="icon-youtube-squared">
							<span>MNHS YouTube</span>
						</i>
					</a>
					<a
						className={styles.navLink}
						href="https://twitter.com/meycauayannhs"
					>
						<i className="icon-twitter-squared">
							<span>MNHS Twitter</span>
						</i>
					</a>
					<a
						className={styles.navLink}
						href="https://github.com/mnhs-shs"
					>
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
