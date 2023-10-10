export function rainbow(delay: number): string {
	const rainbowState = Math.ceil((Date.now() + delay) / 20.0) % 360;
	const hue = rainbowState / 360.0;
	return `hsl(${hue * 360}, 100%, 50%)`;
}
/**
 * Creates a new interval using {@link setInterval}.
 * @returns {number} The interval registered. (for convenience)
 */
export default function init(): number {
	// typescript being a faggot
	return setInterval(() => {
		document.documentElement.style.setProperty("--rainbow", rainbow(2));
	}, 2) as unknown as number;
}
