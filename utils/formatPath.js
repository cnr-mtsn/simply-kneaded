export default function formatPath(path) {
	if(path.length < 2) {
		return 'Home';
	}
	let first = path.substring(1, 2).toUpperCase();
	let rest = path.substring(2, path.length);
	return `${first}${rest}`;
}
