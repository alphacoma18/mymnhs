import GenImage from "@/components/gen/image";
import GenLink from "@/components/gen/link";
import GenMeta from "@/components/gen/meta";
import { FC } from "react";
import styles from "./styles.module.css";
interface Props {
	props: {
		code: number;
		msg: string;
	};
}
const ErrorPage: FC<Props> = ({ props: { code, msg } }) => {
	return (
		<>
			<GenMeta
				props={{
					title: `Error ${code}`,
					description: msg,
				}}
			/>
			<section className={styles.parent}>
				<div className={styles.fill}>
					<div className={styles.format}>
						<div className={styles.style}>
							<GenImage
								props={{
									src: "/media/logos/mnhs.png",
									alt: "Meycauayan National High School Logo",
									height: 120,
									width: 120,
									className: "centerImage",
								}}
							></GenImage>

							<p className={styles.msg}>Error 404: Not Found</p>
							<hr className={"hr"} />
							<GenLink
								props={{
									href: "/",
									label: "Back To School Platform Home",
									className: styles.linkStyle,
								}}
							>
								Back To School Platform Home
							</GenLink>
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

export default ErrorPage;
