import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
const MnhsLogo: React.FC = () => {
	return (
		<div className={styles.imagePositioner}>
			<Image
				src="/attachables/logos/mnhs.png"
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
