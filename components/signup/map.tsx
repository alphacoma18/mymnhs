// ignore this error

import React from "react";

interface ListProps {
	list: string[] | void;
}
const Map: React.FC<ListProps> = ({ list }) => {
	return (
		<React.Fragment>
			<option value="">Select Section</option>
			{list?.map((item: string, index: number) => {
				return (
					<option key={index} value={item}>
						{item}
					</option>
				);
			})}
		</React.Fragment>
	);
};

export default Map;
