import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import FlexHRule from "../../../components/_flexHRule";
import MnhsLogo from "../../../components/_mnhsLogo";
import { axios } from "../../../utils/axios/axios";
import styles from "./index.module.css";
const LeftMenu: React.FC = () => {
	const router = useRouter();
	const [show, setShow] = useState<boolean>(false);

	async function handleLogout() {
		try {
			await axios.post("/logout");
			return await router.push("/login");
		} catch (error) {
			console.log(error);
			return await router.push("/500");
		}
	}
	return (
		<>
			<section>
				<button
					type="button"
					className={styles.menuContainer}
					title="Toggle Right Side Menu"
					onClick={() => setShow((prev) => !prev)}
				>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
				</button>
			</section>
			<div
				className={show ? styles.outerLeftMenuX : styles.outerLeftMenu}
			>
				<a
					className={styles.closeMenu}
					onClick={() => setShow((prev) => !prev)}
				>
					&times;
				</a>
				<div className={styles.mainLeftMenu}>
					<MnhsLogo />
					<p>Meycauayan Senior High School</p>
					<p>The Unofficial Website</p>
					<q>Be the best, choose MNHS!</q>
					<FlexHRule />
					<Link href={"/profile"}>
						<i className="icon-user"> Profile</i>
					</Link>
					<Link href={"/bookmarks"}>
						<i className="icon-bookmark"> Bookmarks</i>
					</Link>
					<Link href={"/to-do-list"}>
						<i className="icon-th-list"> To Do List</i>
					</Link>
					<Link href={"/word-process"}>
						<i className="icon-doc-text-inv"> Word Process</i>
					</Link>
					<Link href={"/settings"}>
						<i className="icon-cog"> Settings</i>
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
						<i className="icon-bank"> About Us</i>
					</Link>
					<Link href={"/site-updates"}>
						<i className="icon-code"> Site Updates</i>
					</Link>
					<Link href={"/privacy-policy"}>
						<i className="icon-shield"> Privacy Policy</i>
					</Link>
					<Link href={"/usage-tutorial"}>
						<i className="icon-desktop"> Usage Tutorial</i>
					</Link>
					<Link href={"/contact-us"}>
						<i className="icon-mail-alt"> Contact Us</i>
					</Link>
					<FlexHRule />
					<p>Copyright &copy; 2022.</p>
					<p>Meycauayan Senior High School</p>
					<p>All Rights Reserved</p>
				</div>
			</div>
		</>
	);
};

export default LeftMenu;
