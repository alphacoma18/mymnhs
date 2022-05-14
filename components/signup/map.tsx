// ignore this error

interface ListProps {
	list: string[] | void;
}
const Map: React.FC<ListProps> = ({ list }) => {
	return (
		<>
			<option value="">Select Section</option>
			{list?.map((item: string, index: number) => {
				return (
					<option key={index} value={item}>
						{item}
					</option>
				);
			})}
		</>
	);
};

export default Map;
