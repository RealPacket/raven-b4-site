export interface IRange {
	min: number;
	max: number;
	isInRange(number: number): boolean;
}
export class Range implements IRange {
	min: number;
	max: number;
	constructor(min: number, max: number) {
		this.min = min;
		this.max = max;
	}
	isInRange(number: number): boolean {
		return number >= this.min && number <= this.max;
	}
	[Symbol.toStringTag]() {
		return `Range (${this.min} to ${this.max})`;
	}
}
