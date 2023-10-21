import ChangedEvent from "@components/ClickGUI/Events/ChangedEvent";

export function exportConfig() {
	const modules = document.querySelectorAll(
		".module"
	) as NodeListOf<HTMLDivElement>;
	const config = {};
	modules.forEach(mod => {
		const name = mod.dataset.name!;
		///@ts-expect-error
		config[name] = {
			Value: mod.dataset.toggled!,
		};
	});
	return config;
}

export default function importConfig(src: string) {
	const parsed = JSON.parse(src);
	for (const modName in parsed) {
		if (modName.startsWith("$")) continue;
		const mod = document.querySelector(
			`.module[data-name=${modName}]`
		) as HTMLDivElement;
		if (!mod) {
			console.warn(`Module "${modName}" was not found!`);
			continue;
		}
		console.log("handling module", mod.dataset.name);
		const selfInConfig = parsed[mod.dataset.name!];
		const state = selfInConfig.Value;
		if (JSON.parse(mod.dataset.toggled!) !== state)
			mod.dataset.toggled = JSON.stringify(state);
		for (const k in selfInConfig) {
			// ignore the state key.
			if (k === "Value") continue;
			const realName = k.replace("Value", "");
			const settings = mod
				.querySelector(".module-contents")!
				.querySelectorAll(".setting") as NodeListOf<HTMLDivElement>;
			settings.forEach(setting => {
				const settingInConfig = selfInConfig[k];
				console.log(`handling setting "${setting.dataset.name}".`);
				console.log(setting.dataset.value);
				if (setting.dataset.name === realName) {
					setting.dispatchEvent(
						new ChangedEvent<typeof settingInConfig>(
							setting,
							JSON.parse(setting.dataset.value!),
							settingInConfig
						)
					);
					setting.dataset.value = settingInConfig;
				}
			});
		}
	}
}
