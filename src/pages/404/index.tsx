import MnhsLogo from "@/components/_mnhsLogo";
import GenMeta from "@/components/gen/meta";
import { NextPageWithLayout } from "@/nextPage";
import Link from "next/link";
import styles from "./index.module.css";
const Error404: NextPageWithLayout = () => {
	return (
		<>
			<GenMeta
				props={{
					title: "Error 404",
					description:
						"The page you are looking for does not exist. Please check the URL and try again.",
				}}
			/>
			<section className={styles.outermostError}>
				<div className={styles.errorFill}>
					<div className={styles.errorFormat}>
						<div className={styles.errorStyle}>
							<MnhsLogo />
							<h2>Error 404: Not Found</h2>
							<hr className={"horizontalRule"} />
							<Link
								href={"/"}
								className={styles.linkStyle}
								title={"Go to the home page"}
							>
								Back To School Platform Home
							</Link>
							<a
								href="https://mnhs-shs.github.io/unofficial-site/"
								className={styles.linkStyle}
								title="Go to the official MNHS website"
								rel="noopener noreferrer"
								target="_blank"
							>
								Visit The School Webpage
							</a>
							<a
								href="https://www.facebook.com/meycauayannationalhsseniorhigh"
								className={styles.linkStyle}
								title="Go to the official MNHS Facebook page"
								rel="noopener noreferrer"
								target="_blank"
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
