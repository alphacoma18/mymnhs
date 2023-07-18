import { Session } from "next-auth/core/types";
export interface IContextGlobal {
	user: Session["user"];
	device: {
		type: "mobile" | "tablet" | "laptop" | "desktop";
		isHandheld: boolean;
	};
}
