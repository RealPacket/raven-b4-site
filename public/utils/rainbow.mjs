/**
 * @param {number} delay The delay.
 * @returns {string} A CSS HSL string of the color.
 */
export function rainbow(delay) {
	const rainbowState = Math.ceil((Date.now() + delay) / 20.0) % 360;
	const hue = rainbowState / 360.0;
	return `hsl(${hue * 360}, 100%, 50%)`;
}
/**
 * Creates a new interval using {@link setInterval}.
 * @returns {number} The interval registered. (for convenience)
 */
export default function init() {
	return setInterval(() => {
		document.documentElement.style.setProperty("--rainbow", rainbow(2));
	}, 2);
}
