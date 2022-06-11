import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
const Footer: React.FC = () => {
	return (
		<>
			<footer className={styles.outermostFooter}>
				<br />
				<hr className={styles.horizontalRuleFull} />
				<br />
				<div className={styles.footerFlex}>
					<div className={styles.leftFlexItem}>
						<span className={styles.logoLeft}>
							<Image
								src="/attachables/mnhs-images/logos/login_logo.png"
								height={120}
								width={120}
								alt="MNHS Logo"
								title="The Meycauayan National High School Logo"
							/>
						</span>
						<span className={styles.logoRight}>
							<Image
								src="/attachables/mnhs-images/logos/deped.png"
								height={120}
								width={120}
								alt="DepEd Logo"
								title="The Department Of Education Logo"
							/>
						</span>
						<h2>Meycauayan&nbsp;Senior High&nbsp;School</h2>
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
				<br />
				<hr className={styles.horizontalRuleFull} />
				<p className={styles.footerCopyright}>
					Copyright &copy; 2022 Meycauayan National High School. All
					Rights Reserved
				</p>
			</footer>
		</>
	);
};

export default Footer;
