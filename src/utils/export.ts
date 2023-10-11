export function exportConfig() {
	const modules = document.querySelectorAll(".module");
	const config = {};
	modules.forEach(mod => {
		config[mod.dataset.name] = {
			Value: mod.dataset.toggled,
		};
	});
	return config;
}

export function importConfig(src: string) {
	const modules = document.querySelectorAll(".module");
	const parsed = JSON.parse(src);
	modules.forEach(mod => {
		// TODO: find a better name for this.
		const selfInConfig = parsed[mod.dataset.name];
		const state = selfInConfig.Value;
		if (JSON.parse(mod.dataset.toggled) !== state)
			mod.dataset.toggled = JSON.stringify(state);
		for (const k in mod) {
			// ignore the state key.
			if (k === "Value") continue;
			const v = mod[k];
			const realName = k.replace("Value", "");
			const settings = module
				.querySelector(".module-contents")!
				.querySelectorAll(".setting");
			settings.forEach(setting => {
				const settingInConfig = mod[k];
				console.log("handling setting", setting.dataset.name);
				if (setting.dataset.name === realName)
					setting.dataset.value = JSON.stringify(settingInConfig);
			});
		}
	});
}
