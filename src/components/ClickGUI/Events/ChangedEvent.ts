export interface ChangedEventArgs<T> {
	oldValue: T;
	newValue: T;
}
export default class ChangedEvent<T> extends CustomEvent<ChangedEventArgs<T>> {
	static type = "ChangedEvent";
	override target: HTMLElement;
	oldValue: T;
	newValue: T;
	/**
	 *  Constructs a new {@link ChangedEvent}.
	 */
	constructor(target: HTMLElement, oldValue: T, newValue: T) {
		super("ChangedEvent");
		this.target = target;
		this.oldValue = oldValue;
		this.newValue = newValue;
	}
}
