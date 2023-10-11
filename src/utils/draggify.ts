/**
 *
 * @param {HTMLElement} element The element to make draggable
 * @param {(event: MouseEvent) => boolean} canDrag an extra function that allows you to make it impossible to drag (if it returns false)
 */
export default function draggify(
	element: HTMLElement,
	canDrag: (event: MouseEvent) => boolean = () => true
) {
	let dragging = false;
	// Get the mouse cursor position
	let mouseX: number;
	let mouseY: number;

	// Store the mouse cursor position relative to the element
	let offsetX: number;
	let offsetY: number;
	// Add a mousedown event listener to the element
	element.addEventListener("mousedown", dragStart);
	// Add a mousemove event listener to the document
	document.addEventListener("mousemove", drag);

	// Add a mouseup event listener to the document
	document.addEventListener("mouseup", dragEnd);

	// Function to start dragging the element
	function dragStart(event: MouseEvent) {
		dragging = true;
		if (!dragging) return;
		if (!canDrag(event)) return;
		// Get the mouse cursor position
		mouseX = event.clientX;
		mouseY = event.clientY;

		// Store the mouse cursor position relative to the element
		offsetX = mouseX - element.offsetLeft;
		offsetY = mouseY - element.offsetTop;
		// Add a mousemove event listener to the document
		document.addEventListener("mousemove", drag);

		// Prevent the default mousemove behavior
		event.preventDefault();
	}

	// Function to drag the element
	function drag(event: MouseEvent) {
		if (!dragging) return;
		if (!canDrag(event)) return;
		if (element.style.position === "static" || element.style.position === "")
			element.style.position = "fixed";
		// Get the new mouse cursor position
		const mouseX = event.clientX;
		const mouseY = event.clientY;

		// Calculate the new position of the element
		const newX = mouseX - offsetX;
		const newY = mouseY - offsetY;

		// Set the new position of the element
		element.style.left = `${newX}px`;
		element.style.top = `${newY}px`;
	}

	// Function to stop dragging the element
	function dragEnd() {
		dragging = false;
	}
}
