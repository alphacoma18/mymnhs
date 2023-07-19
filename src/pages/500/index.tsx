import GenMeta from "@/components/gen/meta";
import { NextPageWithLayout } from "@/nextPage";
import Link from "next/link";
import MnhsLogo from "../../components/_mnhsLogo";
import styles from "./index.module.css";
const Error404: NextPageWithLayout = () => {
	return (
		<>
			<GenMeta
				props={{
					title: "Error 500",
					description:
						"An internal server error has occurred while processing your request. Please try again later.",
				}}
			/>
			<section className={styles.outermostError}>
				<div className={styles.errorFill}>
					<div className={styles.errorFormat}>
						<div className={styles.errorStyle}>
							<MnhsLogo />
							<h2>Error 500:</h2>
							<h2>Internal Server Error</h2>
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
