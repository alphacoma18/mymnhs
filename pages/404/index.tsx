import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import MnhsLogo from "../../components/_mnhsLogo";
import Meta from "../../components/_meta";
const Error404: React.FC = () => {
	return (
		<>
			<Meta
				title="Error 404 | MyMNHS"
				description="The page you are looking for does not exist. Please check the URL and try again."
				url="/404"
				ogTitle="Error 404 | MyMNHS"
				ogDescription="The page you are looking for does not exist. Please check the URL and try again."
				ogUrl="/404"
				twitterTitle="Error 404 | MyMNHS"
				twitterDescription="The page you are looking for does not exist. Please check the URL and try again."
				twitterUrl="/404"
			/>
			<section className={styles.outermostError}>
				<div className={styles.errorFill}>
					<div className={styles.errorFormat}>
						<div className={styles.errorStyle}>
							<MnhsLogo />
							<h2>Error 404: Not Found</h2>
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
								rel="noopener noreferrer"
							>
								Visit The School Webpage
							</a>
							<a
								href="https://www.facebook.com/meycauayannationalhsseniorhigh"
								className={styles.linkStyle}
								title="Go to the official MNHS Facebook page"
								rel="noopener noreferrer"
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
