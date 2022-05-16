import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
const MnhsLogo: React.FC = () => {
	return (
		<div className={styles.imagePositioner}>
			<Image
				src="/attachables/mnhs-images/logos/login_logo.png"
				height={120}
				width={120}
				alt="MNHS Logo"
				title="The Meycauayan National High School Logo"
			/>
		</div>
	);
};

export default MnhsLogo;
