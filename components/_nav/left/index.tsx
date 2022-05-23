import React, { useState } from "react";
import MnhsLogo from "../../_mnhsLogo";
import styles from "./index.module.css";
import Link from "next/link";
import { axios } from "../../../_operations/axios/axios";
import { useRouter } from "next/router";
import FlexHRule from "../../_flexHRule";
const LeftMenu: React.FC = () => {
	const router = useRouter();
	const [show, setShow] = useState<boolean>(false);

	const toggleStyle: { width: string } = {
		width: show ? "275px" : "0px",
	};
	async function handleLogout(): Promise<boolean | void> {
		try {
			await axios.post("/logout");
			return router.push("/login");
		} catch (error: any) {
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
					onClick={() => setShow(!show)}
				>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
				</button>
			</section>
			<div className={styles.outerLeftMenu} style={toggleStyle}>
				<a className={styles.closeMenu} onClick={() => setShow(!show)}>
					&times;
				</a>
				<div className={styles.mainLeftMenu}>
					<MnhsLogo />
					<p>Meycauayan National High School</p>
					<p>The Unofficial Website</p>
					<q>Be the best, choose MNHS!</q>
					<FlexHRule />
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
					<Link href={"/to-do-list"}>
						<a>
							<i className="icon-th-list"> To Do List</i>
						</a>
					</Link>
					<Link href={"/word-process"}>
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
					<FlexHRule />
					<Link href={"/about-us"}>
						<a>
							<i className="icon-bank"> About Us</i>
						</a>
					</Link>
					<Link href={"/site-updates"}>
						<a>
							<i className="icon-code"> Site Updates</i>
						</a>
					</Link>
					<Link href={"/privacy-policy"}>
						<a>
							<i className="icon-shield"> Privacy Policy</i>
						</a>
					</Link>
					<Link href={"/usage-tutorial"}>
						<a>
							<i className="icon-desktop"> Usage Tutorial</i>
						</a>
					</Link>
					<Link href={"/contact-us"}>
						<a>
							<i className="icon-mail-alt"> Contact Us</i>
						</a>
					</Link>
					<FlexHRule />
					<p>Copyright &copy; 2022.</p>
					<p>Meycauayan National High School</p>
					<p>All Rights Reserved</p>
				</div>
			</div>
		</>
	);
};

export default LeftMenu;
