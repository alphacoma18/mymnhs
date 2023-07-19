import useDeviceType from "@/utils/hooks/useDeviceType";
import { useSession } from "next-auth/react";
import { ReactNode, createContext } from "react";
import { IContextGlobal } from "./type";
const ContextGlobal = createContext<IContextGlobal>({} as IContextGlobal);
export default ContextGlobal;

interface Props {
	children: ReactNode;
}
export const ContextProviderGlobal: React.FC<Props> = ({ children }) => {
	const user = useSession().data?.user;
	const device = useDeviceType();
	return (
		<ContextGlobal.Provider
			value={{
				user,
				device,
			}}
		>
			{children}
		</ContextGlobal.Provider>
	);
};
