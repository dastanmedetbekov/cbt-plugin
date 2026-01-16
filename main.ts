import { Plugin } from "obsidian";
import { CBTModal } from "./cbt-modal";
import { CBTJournalSettings, DEFAULT_SETTINGS } from "./settings";
import { CBTJournalSettingTab } from "./settings-tab";

export default class CBTJournalPlugin extends Plugin {
	settings: CBTJournalSettings;

	async onload() {
		await this.loadSettings();

		// Add ribbon icon
		this.addRibbonIcon("brain", "New CBT Entry", () => {
			this.openCBTModal();
		});

		// Add command
		this.addCommand({
			id: "open-cbt-modal",
			name: "New CBT Entry",
			callback: () => {
				this.openCBTModal();
			}
		});

		// Add settings tab
		this.addSettingTab(new CBTJournalSettingTab(this.app, this));
	}

	openCBTModal() {
		new CBTModal(this.app, this.settings).open();
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
