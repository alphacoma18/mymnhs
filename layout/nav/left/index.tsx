import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { axios } from "../../../utils/axios/axios";
import MnhsLogo from "../../../components/_mnhsLogo";
import FlexHRule from "../../../components/_flexHRule";
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
					<p>Meycauayan Senior High School</p>
					<p>All Rights Reserved</p>
				</div>
			</div>
		</>
	);
};

export default LeftMenu;