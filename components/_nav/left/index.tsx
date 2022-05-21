import React, { useState, useContext } from "react";
import MnhsLogo from "../../_mnhsLogo";
import styles from "./index.module.css";
import Link from "next/link";
import { axios } from "../../../_operations/axios/axios";
import { useRouter } from "next/router";
import AuthContext from "../../../_operations/context/AuthProvider";
const LeftMenu: React.FC = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleStyle: { width: string } = {
		width: isOpen ? "275px" : "0px",
	};
	async function handleLogout(): Promise<void> {
		try {
			await axios.post("/logout");
			router.push("/login");
			return void 0;
		} catch (error) {
			console.log(error);
			return void 0;
		}
	}
	return (
		<>
			<section>
				<button
					type="button"
					className={styles.menuContainer}
					title="Toggle Right Side Menu"
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
				</button>
			</section>
			<div className={styles.outerLeftMenu} style={toggleStyle}>
				<a
					className={styles.closeMenu}
					onClick={() => setIsOpen(!isOpen)}
				>
					&times;
				</a>
				<div className={styles.mainLeftMenu}>
					<MnhsLogo />
					<p>Meycauayan National High School</p>
					<p>The Unofficial Website</p>
					<q>Be the best, choose MNHS!</q>
					<hr className="horizontalRuleYellow" />
					<Link href={"/profile"}>
						<a>
							<i className="icon-user"> Profile</i>
						</a>
					</Link>
					<Link href={"/bookmarks"}>
						<a>
							<i className="icon-bookmark"> Bookmarks</i>
						</a>
					</Link>
					<Link href={"/toDoList"}>
						<a>
							<i className="icon-th-list"> To Do List</i>
						</a>
					</Link>
					<Link href={"/wordProcess"}>
						<a>
							<i className="icon-doc-text-inv"> Word Process</i>
						</a>
					</Link>
					<Link href={"/settings"}>
						<a>
							<i className="icon-cog"> Settings</i>
						</a>
					</Link>
					<button
						type="button"
						className={styles.logoutButton}
						onClick={handleLogout}
					>
						<a>
							<i className="icon-logout"> Logout</i>
						</a>
					</button>
					<hr className={"horizontalRuleYellow"} />
					<Link href={"/abouUs"}>
						<a>
							<i className="icon-bank"> About Us</i>
						</a>
					</Link>
					<Link href={"/siteUpdates"}>
						<a>
							<i className="icon-code"> Site Updates</i>
						</a>
					</Link>
					<Link href={"/privacyPolicy"}>
						<a>
							<i className="icon-shield"> Privacy Policy</i>
						</a>
					</Link>
					<Link href={"/usageTutorial"}>
						<a>
							<i className="icon-desktop"> Usage Tutorial</i>
						</a>
					</Link>
					<Link href={"/contactUs"}>
						<a>
							<i className="icon-mail-alt"> Contact Us</i>
						</a>
					</Link>
					<hr className={"horizontalRuleYellow"} />
					<p>Copyright &copy; 2022.</p>
					<p>Meycauayan National High School</p>
					<p>All Rights Reserved</p>
				</div>
			</div>
		</>
	);
};

export default LeftMenu;
