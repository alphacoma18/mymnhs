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
					<Link href={"/global-chat"}>
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
							<i className="icon-wpforms">
								<span>Forms and surveys</span>
							</i>
						</a>
					</Link>
					<div className={styles.outerDropDown}>
						<p className={styles.navLink}>
							<i className="icon-empire">
								<span>MNHS Medias</span>
							</i>
						</p>
						<div className={styles.dropDownContent}>
							<a className={styles.dropDownLink}>
								<i className="icon-rebel">
									<span>MNHS School Blog</span>
								</i>
							</a>
							<a
								className={styles.dropDownLink}
								href="https://mnhs-shs.github.io/unofficial-site/"
							>
								<i className="icon-globe">
									<span>MNHS Public Webpage</span>
								</i>
							</a>
							<a
								className={styles.dropDownLink}
								href="https://www.facebook.com/ssgovt"
							>
								<i className="icon-first-order">
									<span>MNHS Student Council</span>
								</i>
							</a>
							<a
								className={styles.dropDownLink}
								href="https://www.facebook.com/meycauayannationalhsseniorhigh"
							>
								<i className="icon-facebook-squared">
									<span>MNHS Facebook</span>
								</i>
							</a>
							<a
								className={styles.dropDownLink}
								href="https://www.youtube.com/channel/UCC3ek2xens8AVd60PvNix1Q/videos"
							>
								<i className="icon-youtube-squared">
									<span>MNHS YouTube</span>
								</i>
							</a>
							<a
								className={styles.dropDownLink}
								href="https://twitter.com/meycauayannhs"
							>
								<i className="icon-twitter-squared">
									<span>MNHS Twitter</span>
								</i>
							</a>
							<a
								className={styles.dropDownLink}
								href="https://github.com/mnhs-shs"
							>
								<i className="icon-github-squared">
									<span>MNHS Github</span>
								</i>
							</a>
						</div>
					</div>
				</div>
				<RightMenu />
			</nav>
		</>
	);
};

export default Nav;
