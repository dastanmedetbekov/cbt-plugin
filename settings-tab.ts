import { App, PluginSettingTab, Setting } from "obsidian";
import type CBTJournalPlugin from "./main";

export class CBTJournalSettingTab extends PluginSettingTab {
	plugin: CBTJournalPlugin;

	constructor(app: App, plugin: CBTJournalPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		containerEl.createEl("h2", { text: "CBT Journal Settings" });

		new Setting(containerEl)
			.setName("Journal folder")
			.setDesc("Folder where CBT entries will be saved")
			.addText((text) =>
				text
					.setPlaceholder("CBT Journal")
					.setValue(this.plugin.settings.journalFolder)
					.onChange(async (value) => {
						this.plugin.settings.journalFolder = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Date format")
			.setDesc("Format for entry dates (uses moment.js format)")
			.addText((text) =>
				text
					.setPlaceholder("YYYY-MM-DD")
					.setValue(this.plugin.settings.dateFormat)
					.onChange(async (value) => {
						this.plugin.settings.dateFormat = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Show distortion descriptions")
			.setDesc("Display descriptions and examples for cognitive distortions")
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.showDescriptions)
					.onChange(async (value) => {
						this.plugin.settings.showDescriptions = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Custom tag")
			.setDesc("Main tag for CBT entries (without #)")
			.addText((text) =>
				text
					.setPlaceholder("cbt")
					.setValue(this.plugin.settings.customTag)
					.onChange(async (value) => {
						this.plugin.settings.customTag = value || "cbt";
						await this.plugin.saveSettings();
					})
			);
	}
}
