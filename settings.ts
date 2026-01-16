export interface CBTJournalSettings {
	journalFolder: string;
	dateFormat: string;
	showDescriptions: boolean;
	customTag: string;
}

export const DEFAULT_SETTINGS: CBTJournalSettings = {
	journalFolder: "CBT Journal",
	dateFormat: "YYYY-MM-DD",
	showDescriptions: true,
	customTag: "cbt"
};
