import ChangedEvent from "./ChangedEvent";

export interface ModuleToggledEventArgs {
	oldState: boolean;
	newState: boolean;
}
export default class ModuleToggledEvent extends CustomEvent<ModuleToggledEventArgs> {
	static type = "ModuleToggleEvent";
	override target: HTMLElement;
	oldState: boolean;
	newState: boolean;
	/**
	 *  Constructs a new {@link ModuleToggledEvent}.
	 */
	constructor(target: HTMLElement, oldState: boolean, newState: boolean) {
		super(ModuleToggledEvent.type);
		this.target = target;
		this.oldState = oldState;
		this.newState = newState;
	}
}
