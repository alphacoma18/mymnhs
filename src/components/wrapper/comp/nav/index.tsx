import GenLink from "@/components/gen/link";
import { FC } from "react";
import styles from "./index.module.css";
// import LeftMenu from "./left";
// import MobileMiddle from "./mobileMid";
// import RightMenu from "./right";
const Nav: FC = () => {
	return (
		<>
			<nav className={styles.topNavigation}>
				{/* <LeftMenu /> */}
				{/* <MobileMiddle /> */}
				<div className={styles.middleNavDiv}>
					<GenLink
						props={{
							href: "/",
							label: "Home",
							className: styles.navLink,
						}}
					>
						<i className="icon-home">
							<span>Home</span>
						</i>
					</GenLink>
					<GenLink
						props={{
							href: "/global-chat",
							label: "Global Chat",
							className: styles.navLink,
						}}
					>
						<i className="icon-globe">
							<span>Global Chat</span>
						</i>
					</GenLink>
					<GenLink
						props={{
							href: "/school-forum",
							label: "School Forum",
							className: styles.navLink,
						}}
					>
						<i className="icon-tasks">
							<span>School Forum</span>
						</i>
					</GenLink>
					<GenLink
						props={{
							href: "/class-schedule",
							label: "Class Schedule",
							className: styles.navLink,
						}}
					>
						<i className="icon-calendar">
							<span>Class Schedule</span>
						</i>
					</GenLink>
					<GenLink
						props={{
							href: "/forms-and-surveys",
							label: "Forms and Surveys",
							className: styles.navLink,
						}}
					>
						<i className="icon-wpforms">
							<span>Forms and Surveys</span>
						</i>
					</GenLink>
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
				{/* <RightMenu /> */}
			</nav>
		</>
	);
};

export default Nav;
