import React, { useContext } from "react";
import AuthContext from "../_operations/context/AuthProvider";
import Meta from "../components/_meta";
import LayoutFooter from "../components/_layoutFooter";
import styles from "./index.module.css";
import Link from "next/link";
const Index: React.FC = () => {
	const { user } = useContext(AuthContext);
	return (
		<>
			<LayoutFooter
				page={
					<>
						<Meta
							title="Home | MyMNHS"
							description="Welcome to the MyMNHS school platform! Connect with your classmates, teachers and fellow students in the campus through the new innovative web platform. Be the best, choose MNHS!"
							url="/"
							ogTitle="Home | MyMNHS"
							ogDescription="Welcome to the MyMNHS school platform! Connect with your classmates, teachers and fellow students in the campus through the new innovative web platform. Be the best, choose MNHS!"
							ogUrl="/"
							twitterTitle="Home | MyMNHS"
							twitterDescription="Welcome to the MyMNHS school platform! Connect with your classmates, teachers and fellow students in the campus through the new innovative web platform. Be the best, choose MNHS!"
							twitterUrl="/"
						/>
						<section className={styles.outermostSection}>
							<h2>Hello {user?.account_first_name}!</h2>
							<h4>
								Welcome to the pre-alpha release of the MyMNHS
								School Academic Platform!
							</h4>
							<hr className="horizontalRuleYellow" />
							<p>
								We are a group of grade 12 ICT
								researchers/developers in Meycauayan National
								High School for the S.Y. 2021 - 2022.
							</p>

							<p>
								As a part of our final research before graduating,
								we were tasked to conduct an output based
								research that solves a particular problem within
								the school, with connection to our uptaken
								strand.
							</p>

							<h4>Thus came our title...</h4>
							<p>
								&quot;The integrated web advancement of
								Meycauayan Senior High School through a school
								managed academic platform&quot;
							</p>
							<p>
								To know more about the current state of the
								research, By all means, do check it out through{" "}
								<a href="https://drive.google.com/drive/folders/1krghj-gUxz95TqOkI0ztFnknqAyKAchu?usp=sharing">
									this link.
								</a>
							</p>
							<h4>
								Note: If you are a research respondent, please
								click the forms and surveys button or{" "}
								<Link href={"forms-and-surveys/1"}>
									<a>here</a>
								</Link>{" "}
								to go and answer the survey
							</h4>
							<hr className="horizontalRuleYellow" />
							<p>
								This platform is by no means completed, as it
								still lacks the full functionality that the
								developers want to implement. However, even as
								graduation passes, we will still push for
								frequent updates and additions.
							</p>
							<p>
								We see the immeasurable future prospects and
								possibilities that will be made possible with
								this research and its output, and so we are open
								to new ideas and feature request from the school
								community! Too see the development code and
								timeline of the platform, see our{" "}
								<a href="https://github.com/mnhs-shs">
									Github account
								</a>
							</p>
							<p>
								For MNHS students that want to contribute and
								join the development team, we are also open so
								just hit us up an email and we&apos;re looking
								forward to coding with you!
							</p>
							<h4>
								Head Developer,
								Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma
							</h4>
							<h4>2022-06-05 16:43:35</h4>
						</section>
					</>
				}
			/>
		</>
	);
};

export default Index;
