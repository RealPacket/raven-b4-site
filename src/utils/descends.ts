/**
 * Returns true if the element {@link toCheck} descends from {@link expected}.
 * @remark Somewhat expensive in performance if there's a lot of descendants for {@link toCheck}.
 * @param toCheck The descendant to check.
 * @param expected The expected descendant
 * @returns {boolean} If {@link toCheck} descends from {@link expected}.
 */
export default function isDescendantOf(
	toCheck: HTMLElement,
	expected: HTMLElement
) {
	// get parent
	let current = toCheck.parentElement;
	while (current?.parentElement) {
		if (current === expected) return true;
		current = current.parentElement;
	}
	return false;
}
