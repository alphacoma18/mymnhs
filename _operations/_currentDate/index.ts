export default function NewDate(): string {
	let timestamp = new Date();
	timestamp.setHours(timestamp.getHours() + 8);
	return timestamp.toISOString().slice(0, 19).replace("T", " ");
}
