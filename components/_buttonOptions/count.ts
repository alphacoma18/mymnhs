/**
 * Create some useState for length and use this function
 * to set value and value length is you want to have a
 * count feature for the inputs on change.
 *
 * This errors out at name. Fix in the future.
 */

interface CreateCount {
	name: string;
	maxLength: number;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	setValueLength: React.Dispatch<React.SetStateAction<number>>;
	event: React.ChangeEvent<HTMLTextAreaElement>;
}
function createCount({
	name,
	maxLength,
	setValue,
	setValueLength,
	event,
}: CreateCount) {
	let f = function () {
		const { value } = event.currentTarget;
		setValue(value);
		if (value.length <= maxLength) {
			setValue(value);
			setValueLength(value.length);
			return void 0;
		} else {
			setValue(value);
			return void 0;
		}
	};
	return Object.defineProperty(f, "name", { value: name });
}
export default createCount;
