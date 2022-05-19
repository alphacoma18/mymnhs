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
				url="/error/404"
				ogTitle="Error 404 | MyMNHS"
				ogDescription="The page you are looking for does not exist. Please check the URL and try again."
				ogUrl="/error/404"
				twitterTitle="Error 404 | MyMNHS"
				twitterDescription="The page you are looking for does not exist. Please check the URL and try again."
				twitterUrl="/error/404"
			/>
			<section className={styles.outermostNotFound}>
				<div className={styles.notFoundFill}>
					<div className={styles.notFoundFormat}>
						<div className={styles.notFoundStyle}>
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
