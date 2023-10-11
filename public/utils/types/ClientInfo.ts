export interface IToggleSetting {
	name: string;
	type: "toggle";
	default?: boolean;
}

export interface ISliderSetting {
	name: string;
	type: "number-slider";
	min: number;
	default?: number;
	max: number;
}

export type AnySetting = IToggleSetting | ISliderSetting;

/**
 * Describes a module for the Click GUI to render.
 */
export interface IModule {
	description?: string;
	settings: AnySetting[];
}

export interface ICategory {
	modules: { [name: string]: IModule };
}

export interface IClientInfo {
	categories: { [name: string]: ICategory };
}

export default IClientInfo;
