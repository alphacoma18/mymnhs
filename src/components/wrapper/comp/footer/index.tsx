import GenLink from "@/components/gen/link";
import Image from "next/image";
import { FC } from "react";
import styles from "./index.module.css";
const Footer: FC = () => {
	return (
		<>
			<footer className={styles.outermostFooter}>
				<br />
				<hr className={styles.horizontalRuleFull} />
				<div className={styles.footerFlex}>
					<div className={styles.leftFlexItem}>
						<span className={styles.logoLeft}>
							<Image
								src="/media/logos/mnhs.png"
								height={100}
								width={100}
								alt="MNHS Logo"
								title="The Meycauayan National High School Logo"
							/>
						</span>
						<span className={styles.logoRight}>
							<Image
								src="/media/logos/deped.png"
								height={100}
								width={100}
								alt="DepEd Logo"
								title="The Department Of Education Logo"
							/>
						</span>
						<h2>Meycauayan&nbsp;National High&nbsp;School</h2>
						<q className={styles.mnhsQuote}>
							Be&nbsp;the&nbsp;best, choose&nbsp;MNHS!
						</q>
						<br />
						<p>
							Ad Astra per Aspera&quot; Meycauayan National High
							School - Senior High School is a public educational
							institution located in Camalig, City of Meycauayan,
							Bulacan.
						</p>
						<br />
						<p>
							Meycauayan National High School - Senior High School
							lives up to its motto; “Be the Best, Choose
							MNHS-SHS” that is why we only have the best,
							seasoned, and caliber educators in our institution.{" "}
						</p>
						<br className={styles.hiddenBreak} />
					</div>
					<div className={styles.rightFlexItem}>
						<h2>Reach Us through these</h2>
						<br />
						<a
							href="https://www.facebook.com/MeycauayanNationalHighSchool"
							target="_blank"
							rel="noopener noreferrer"
						>
							MNHS - @MeycauayanNationalHighSchool
						</a>
						<a
							href="https://www.facebook.com/meycauayannationalhsseniorhigh"
							target="_blank"
							rel="noopener noreferrer"
						>
							MNHS Senior High - @meycauayannationalhsseniorhigh
						</a>
						<a href="tel:044-913-0664">
							Telephone No. (044)913-0664
						</a>
						<a
							rel="noopener noreferrer"
							href="https://www.google.com/maps/place/El+Camino+Real,+Meycauayan,+Bulakan/@14.767303,121.002445,16z/data=!4m5!3m4!1s0x3397b1fae068e5f3:0xa3651acceaaae46a!8m2!3d14.7663353!4d120.9971084?hl=en"
							target="_blank"
						>
							EL Camino Road, Camalig,
							Meycauayan,&nbsp;3020&nbsp;Bulacan
						</a>
						<a href="mailto:meycauayannhs@gmail.com">
							meycauayannhs@gmail.com
						</a>
						<a href="mailto:300757.meyc@deped.gov.ph">
							300757.meyc@deped.gov.ph
						</a>
						<a href="mailto:regofc.mnhs@gmail.com">
							Registar - regofc.mnhs@gmail.com
						</a>
					</div>
				</div>
				<hr className={styles.horizontalRuleFull} />
				<div className={styles.bottomLinks}>
					<GenLink
						props={{
							href: "/about-us",
							label: "About Us",
						}}
					>
						<i className="icon-info"></i>
						<span>About Us</span>
					</GenLink>
					&nbsp;|&nbsp;
					<GenLink
						props={{
							href: "/privacy-policy",
							label: "Privacy Policy",
						}}
					>
						<i className="icon-lock"></i>
						<span>Privacy Policy</span>
					</GenLink>
					&nbsp;|&nbsp;
					<GenLink
						props={{
							href: "/site-updates",
							label: "Site Updates",
						}}
					>
						<i className="icon-info"></i>
						<span>Site Updates</span>
					</GenLink>
					&nbsp;|&nbsp;
					<GenLink
						props={{
							href: "/faqs",
							label: "FAQs",
						}}
					>
						<i className="icon-question"></i>
						<span>FAQs</span>
					</GenLink>
					<p className={styles.footerCopyright}>
						Copyright &copy; 2022 Meycauayan National High School.
						All Rights Reserved
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
