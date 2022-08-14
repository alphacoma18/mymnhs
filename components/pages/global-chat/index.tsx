import React, { useState, useEffect, useContext, useRef } from "react";
import { axios } from "../../../utils/axios/axios";
import AuthContext from "../../../utils/context/AuthProvider";
import NewDate from "../../../utils/currentDate";
import { User } from "../../../utils/context/AuthProvider";
import styles from "./index.module.css";
interface Response {
	message_id: number;
	message_content: string;
	message_timestamp: string;
	account_first_name: string;
	account_last_name: string;
	section_grade: number;
	section_strand: string;
	section_name: string;
}
export interface ChatData {
	message: string;
	user: User;
	timestamp: string;
}
interface OnlineList {
	fullName: string;
}

const GlobalChatComponent: React.FC = () => {
	const { socket, user } = useContext(AuthContext);
	const [userList, setUserList] = useState<OnlineList[]>([]);
	const [userCount, setUserCount] = useState<number | null>(0);
	const [oldMessageList, setOldMessageList] = useState<Response[]>([]);
	const [newMessageList, setNewMessageList] = useState<ChatData[]>([]);
	const [messageContent, setMessageContent] = useState<string>("");
	const [mobileToggle, seMobileToggle] = useState<boolean>(false);
	const scrollRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const asyncEffect = async () => {
			const response = await axios.get("/global-chat/messages");
			setOldMessageList(response.data.result);
			if (scrollRef.current)
				scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		};
		asyncEffect();
		return () => {
			socket.emit("chat-disconnect", {
				id: user?.account_id,
			});
		};
	}, []);
	useEffect(() => {
		if (user !== null || user !== undefined) {
			socket.emit("chat-connect", {
				id: user?.account_id,
				fullName: `${user?.account_first_name} ${user?.account_last_name}`,
			});
		}
		return () => {
			if (scrollRef.current)
				scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		};
	}, [user]);

	useEffect(() => {
		socket.on("chat-connected", (onlineList: OnlineList[]) => {
			setUserList(onlineList);
		});
		socket.on("chat-disconnected", (onlineList: OnlineList[]) => {
			setUserList(onlineList);
		});
	}, [socket]);

	useEffect(() => {
		socket.on(
			"global-chat-messaged",
			({ message, user, timestamp }: ChatData) => {
				setNewMessageList([
					...newMessageList,
					{ message, user, timestamp },
				]);
			}
		);
		return () => {
			socket.off("global-chat-messaged");
			if (scrollRef.current)
				scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		};
	}, [newMessageList]);

	useEffect(() => {
		setUserCount(userList?.length);
	}, [userList]);

	function handleToggle(): void {
		seMobileToggle((prev) => !prev);
		return void 0;
	}

	async function handleSendMessage(
		event: React.FormEvent<HTMLFormElement> | null
	) {
		event?.preventDefault();
		if (messageContent.length > 0) {
			socket.emit("global-chat-message", {
				message: messageContent,
				user,
				timestamp: NewDate(),
			});
			setMessageContent((prev) => "");
			await axios.post("/global-chat", {
				message: messageContent,
				user,
				timestamp: NewDate(),
			});
		}
	}

	return (
		<section className={styles.outermostGlobalChat}>
			<div className={styles.chatSection}>
				<div className={styles.chatSidebar}>
					<button
						type="button"
						className={styles.mobileToggle}
						onClick={handleToggle}
					>
						Toggle Online
					</button>
					<div
						className={
							mobileToggle
								? styles.sidebarPositionerX
								: styles.sidebarPositioner
						}
					>
						<div className={styles.mobilePositioner}>
							<div>
								<h2>
									<i className="icon-globe"></i> MNHS Global
									Chat
								</h2>
								<hr className="horizontalRuleYellow" />
								<h3>
									<i className="icon-users">
										Currently Online: {userCount}
									</i>
								</h3>
							</div>
							<div className={styles.unorderedList}>
								<ul>
									{userList?.map((user) => {
										return (
											<li key={user.fullName}>
												{user.fullName}
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.mainChatShow} ref={scrollRef}>
					{oldMessageList.map((message) => {
						return (
							<div
								className={styles.chatMessage}
								key={message.message_id}
							>
								<details className={styles.messageDetails}>
									<summary>
										{message.account_first_name}{" "}
										{message.account_last_name}
									</summary>
									{message.section_grade} -{" "}
									{message.section_strand}{" "}
									{message.section_name}
								</details>
								<p>{message.message_content}</p>
								<p className={styles.messageTimestamp}>
									{message.message_timestamp
										.slice(0, 19)
										.replace("T", " ")}
								</p>
							</div>
						);
					})}
					<div className={styles.chatMessage}>
						<h3 className={styles.welcomeHead}>
							Welcome to the MyMNHS Global&nbsp;Chat!
						</h3>
					</div>
					{newMessageList.map((message, index) => {
						return (
							<div className={styles.chatMessage} key={index}>
								<details className={styles.messageDetails}>
									<summary>
										{message.user.account_first_name}{" "}
										{message.user.account_last_name}
									</summary>
									{message.user.section_grade} -{" "}
									{message.user.section_strand}{" "}
									{message.user.section_name}
								</details>
								<p>{message.message}</p>
								<p className={styles.messageTimestamp}>
									{message.timestamp
										.slice(0, 19)
										.replace("T", " ")}
								</p>
							</div>
						);
					})}
				</div>
				<form
					className={styles.messageForm}
					onSubmit={handleSendMessage}
				>
					<textarea
						className={styles.textarea}
						placeholder=">>> Enter Your Message"
						required
						maxLength={500}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setMessageContent(e.currentTarget.value)
						}
						value={messageContent}
						onKeyPress={(
							event: React.KeyboardEvent<HTMLTextAreaElement>
						) => {
							event.key === "Enter" &&
								!event.shiftKey &&
								(event.preventDefault(),
								handleSendMessage(null));
						}}
					></textarea>
					<button type="submit" className={styles.sendButton}>
						<i className="icon-paper-plane"></i>Send
					</button>
				</form>
			</div>
		</section>
	);
};

export default GlobalChatComponent;
