import { FC } from "react";
import Footer from "./footer";
import Nav from "./nav";
interface Props {
	children: React.ReactNode;
	props: {
		showNav: boolean;
		showFooter: boolean;
	};
}

const Wrapper: FC<Props> = ({ children, props: { showNav, showFooter } }) => {
	return (
		<>
			{showNav && <Nav />}
			<div className="wrapper">{children}</div>
			{showFooter && <Footer />}
		</>
	);
};

export default Wrapper;
