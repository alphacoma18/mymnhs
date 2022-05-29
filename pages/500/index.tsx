import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import MnhsLogo from "../../components/_mnhsLogo";
import Meta from "../../components/_meta";
const Error404: React.FC = () => {
	return (
		<>
			<Meta
				title="Error 500 | MyMNHS"
				description="An internal server error has occured while processing your request. Please try again later."
				url="/500"
				ogTitle="Error 500 | MyMNHS"
				ogDescription="An internal server error has occured while processing your request. Please try again later."
				ogUrl="/500"
				twitterTitle="Error 500 | MyMNHS"
				twitterDescription="An internal server error has occured while processing your request. Please try again later."
				twitterUrl="/500"
			/>
			<section className={styles.outermostError}>
				<div className={styles.errorFill}>
					<div className={styles.errorFormat}>
						<div className={styles.errorStyle}>
							<MnhsLogo />
							<h2>Error 500:</h2>
							<h2>Internal Server Error</h2>
							<hr className={"horizontalRule"} />
							<Link href={"/"}>
								<a
									className={styles.linkStyle}
									title={"Go to the home page"}
								>
									Back To School Platform Home
								</a>
							</Link>
							<a
								href="https://mnhs-shs.github.io/unofficial-site/"
								className={styles.linkStyle}
								title="Go to the official MNHS website"
							>
								Visit The School Webpage
							</a>
							<a
								href="https://www.facebook.com/meycauayannationalhsseniorhigh"
								className={styles.linkStyle}
								title="Go to the official MNHS Facebook page"
							>
								Visit The School Facebook Page
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Error404;
