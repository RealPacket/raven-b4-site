import type { IRange } from "./range";

export class Setting<T> {
	_value?: T;
	constructor(value?: T) {
		this._value = value;
	}
	public get value(): T {
		if (!this._value)
			throw new Error("Can't get value, as value is not defined.");
		return this._value;
	}
	public set value(value: T) {
		this._value = value;
	}
}

export class Slider extends Setting<number> {
	declare _value: number;
	range: IRange;

	constructor(range: IRange, defaultVal: number = range.min) {
		super(defaultVal);
		this.range = range;
	}
	static fromComponent(element: HTMLElement) {}
	public set value(value: number) {
		if (!this.range.isInRange(value))
			throw new Error(`Number ${value} is not in the range of ${this.range}.`);
		this._value = value;
	}
}

export class Toggle extends Setting<boolean> {
	declare _value: boolean;

	constructor(toggled: boolean = false) {
		super(toggled);
	}

	static fromComponent(element: HTMLElement) {}
	public get value(): boolean {
		return this._value;
	}
	public set value(value: boolean) {
		this._value = value;
	}
}