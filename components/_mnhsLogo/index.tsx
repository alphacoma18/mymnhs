import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
const MnhsLogo: React.FC = () => {
	return (
		<div className={styles.imagePositioner}>
			<Image
				src="/mobileLogo.png"
				height={120}
				width={120}
				alt="MNHS Logo"
				title="The Meycauayan National High School Logo"
				lang="en"
			/>
		</div>
	);
};

export default MnhsLogo;
