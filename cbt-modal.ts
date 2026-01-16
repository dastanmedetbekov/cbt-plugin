import { App, Modal, Setting, moment } from "obsidian";
import type { CBTJournalSettings } from "./settings";
import { COGNITIVE_DISTORTIONS } from "./cognitive-distortions";

export interface CBTEntry {
	date: string;
	time: string;
	situation: string;
	automaticThoughts: string;
	emotions: string;
	emotionIntensityBefore: number;
	physicalReactions: string;
	behaviors: string;
	selectedDistortions: string[];
	rationalThought: string;
	emotionIntensityAfter: number;
}

export class CBTModal extends Modal {
	settings: CBTJournalSettings;
	entry: CBTEntry;
	
	private situationInput: HTMLTextAreaElement;
	private thoughtsInput: HTMLTextAreaElement;
	private emotionsInput: HTMLInputElement;
	private intensityBeforeSlider: HTMLInputElement;
	private intensityBeforeValue: HTMLSpanElement;
	private physicalInput: HTMLTextAreaElement;
	private behaviorsInput: HTMLTextAreaElement;
	private distortionCheckboxes: Map<string, HTMLInputElement>;
	private rationalThoughtInput: HTMLTextAreaElement;
	private intensityAfterSlider: HTMLInputElement;
	private intensityAfterValue: HTMLSpanElement;

	constructor(app: App, settings: CBTJournalSettings) {
		super(app);
		this.settings = settings;
		this.distortionCheckboxes = new Map();
		this.initializeEntry();
	}

	initializeEntry(): void {
		const now = moment();
		this.entry = {
			date: now.format(this.settings.dateFormat),
			time: now.format("HH:mm"),
			situation: "",
			automaticThoughts: "",
			emotions: "",
			emotionIntensityBefore: 5,
			physicalReactions: "",
			behaviors: "",
			selectedDistortions: [],
			rationalThought: "",
			emotionIntensityAfter: 5
		};
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.empty();
		contentEl.addClass("cbt-modal");

		// Title
		contentEl.createEl("h2", { text: "CBT Journal Entry" });
		contentEl.createEl("p", { 
			text: `${this.entry.date} at ${this.entry.time}`,
			cls: "cbt-modal-subtitle"
		});

		// Situation Section
		this.createSection(contentEl, "Situation", "What happened? Describe the event or trigger.");
		this.situationInput = this.createTextArea(contentEl, "Describe the situation...", 3);

		// Automatic Thoughts Section
		this.createSection(contentEl, "Automatic Thoughts", "What thoughts immediately came to mind?");
		this.thoughtsInput = this.createTextArea(contentEl, "What did you think?", 3);

		// Emotions Section
		this.createSection(contentEl, "Emotions", "What emotions did you feel? (e.g., anxiety, sadness, anger)");
		this.emotionsInput = this.createInput(contentEl, "List your emotions...");

		// Emotion Intensity Before
		contentEl.createEl("h4", { text: "Emotion Intensity (Before)" });
		const intensityBeforeContainer = contentEl.createDiv({ cls: "cbt-slider-container" });
		this.intensityBeforeSlider = intensityBeforeContainer.createEl("input", {
			type: "range",
			cls: "cbt-slider",
			attr: { min: "0", max: "10", value: "5" }
		});
		this.intensityBeforeValue = intensityBeforeContainer.createEl("span", {
			text: "5",
			cls: "cbt-slider-value"
		});
		
		this.intensityBeforeSlider.addEventListener("input", (e) => {
			const value = (e.target as HTMLInputElement).value;
			this.intensityBeforeValue.setText(value);
			this.entry.emotionIntensityBefore = parseInt(value);
		});

		// Physical Reactions Section
		this.createSection(contentEl, "Physical Reactions", "What did you feel in your body?");
		this.physicalInput = this.createTextArea(contentEl, "Tension, rapid heartbeat, sweating...", 2);

		// Behaviors Section
		this.createSection(contentEl, "Behaviors/Actions", "What did you do in response?");
		this.behaviorsInput = this.createTextArea(contentEl, "What actions did you take?", 2);

		// Cognitive Distortions Section
		contentEl.createEl("h3", { text: "Cognitive Distortions", cls: "cbt-section-title" });
		contentEl.createEl("p", { 
			text: "Select the thinking patterns present in your automatic thoughts:",
			cls: "cbt-section-desc"
		});

		const distortionsContainer = contentEl.createDiv({ cls: "cbt-distortions-grid" });
		
		COGNITIVE_DISTORTIONS.forEach(distortion => {
			const distortionItem = distortionsContainer.createDiv({ cls: "cbt-distortion-item" });
			
			const checkbox = distortionItem.createEl("input", {
				type: "checkbox",
				cls: "cbt-checkbox"
			});
			checkbox.id = distortion.id;
			
			const labelContainer = distortionItem.createDiv({ cls: "cbt-distortion-label-container" });
			const label = labelContainer.createEl("label", {
				text: distortion.name,
				cls: "cbt-distortion-label",
				attr: { for: distortion.id }
			});

			if (this.settings.showDescriptions) {
				labelContainer.createEl("p", {
					text: distortion.description,
					cls: "cbt-distortion-desc"
				});
				labelContainer.createEl("p", {
					text: `Example: "${distortion.example}"`,
					cls: "cbt-distortion-example"
				});
			}
			
			this.distortionCheckboxes.set(distortion.id, checkbox);
		});

		// Rational Thought Section
		this.createSection(contentEl, "Rational Thought", "What's a more balanced, realistic way to think about this?");
		this.rationalThoughtInput = this.createTextArea(contentEl, "Write a more rational alternative thought...", 4);

		// Emotion Intensity After
		contentEl.createEl("h4", { text: "Emotion Intensity (After Reframing)" });
		const intensityAfterContainer = contentEl.createDiv({ cls: "cbt-slider-container" });
		this.intensityAfterSlider = intensityAfterContainer.createEl("input", {
			type: "range",
			cls: "cbt-slider",
			attr: { min: "0", max: "10", value: "5" }
		});
		this.intensityAfterValue = intensityAfterContainer.createEl("span", {
			text: "5",
			cls: "cbt-slider-value"
		});
		
		this.intensityAfterSlider.addEventListener("input", (e) => {
			const value = (e.target as HTMLInputElement).value;
			this.intensityAfterValue.setText(value);
			this.entry.emotionIntensityAfter = parseInt(value);
		});

		// Buttons
		const buttonContainer = contentEl.createDiv({ cls: "cbt-button-container" });
		
		const saveButton = buttonContainer.createEl("button", {
			text: "Save Entry",
			cls: "mod-cta"
		});
		saveButton.addEventListener("click", () => this.saveEntry());

		const cancelButton = buttonContainer.createEl("button", {
			text: "Cancel"
		});
		cancelButton.addEventListener("click", () => this.close());
	}

	createSection(container: HTMLElement, title: string, description: string): void {
		container.createEl("h3", { text: title, cls: "cbt-section-title" });
		container.createEl("p", { text: description, cls: "cbt-section-desc" });
	}

	createInput(container: HTMLElement, placeholder: string): HTMLInputElement {
		const input = container.createEl("input", {
			type: "text",
			cls: "cbt-input",
			attr: { placeholder }
		});
		return input;
	}

	createTextArea(container: HTMLElement, placeholder: string, rows: number): HTMLTextAreaElement {
		const textarea = container.createEl("textarea", {
			cls: "cbt-textarea",
			attr: { placeholder, rows: rows.toString() }
		});
		return textarea;
	}

	async saveEntry() {
		// Collect data from form
		this.entry.situation = this.situationInput.value;
		this.entry.automaticThoughts = this.thoughtsInput.value;
		this.entry.emotions = this.emotionsInput.value;
		this.entry.physicalReactions = this.physicalInput.value;
		this.entry.behaviors = this.behaviorsInput.value;
		this.entry.rationalThought = this.rationalThoughtInput.value;
		
		// Collect selected distortions
		this.entry.selectedDistortions = [];
		this.distortionCheckboxes.forEach((checkbox, id) => {
			if (checkbox.checked) {
				this.entry.selectedDistortions.push(id);
			}
		});

		// Validate required fields
		if (!this.entry.situation || !this.entry.automaticThoughts || !this.entry.emotions) {
			// Show error
			return;
		}

		// Create markdown content
		const content = this.generateMarkdown();

		// Save to file
		await this.saveToFile(content);

		this.close();
	}

	generateMarkdown(): string {
		const intensityChange = this.entry.emotionIntensityBefore - this.entry.emotionIntensityAfter;
		const percentChange = this.entry.emotionIntensityBefore > 0 
			? Math.round((intensityChange / this.entry.emotionIntensityBefore) * 100)
			: 0;
		
		// Generate tags
		const distortionTags = this.entry.selectedDistortions
			.map(id => {
				const distortion = COGNITIVE_DISTORTIONS.find(d => d.id === id);
				return distortion ? `#${id}` : '';
			})
			.filter(tag => tag !== '')
			.join(' ');
		
		const mainTag = this.settings.customTag || "cbt";
		const tags = `#${mainTag} ${distortionTags}`;

		let markdown = `---\n`;
		markdown += `date: ${this.entry.date}\n`;
		markdown += `time: ${this.entry.time}\n`;
		markdown += `emotion-before: ${this.entry.emotionIntensityBefore}\n`;
		markdown += `emotion-after: ${this.entry.emotionIntensityAfter}\n`;
		markdown += `tags: [${mainTag}, ${this.entry.selectedDistortions.join(', ')}]\n`;
		markdown += `---\n\n`;
		markdown += `# CBT Entry - ${this.entry.date}\n\n`;
		
		markdown += `## Situation\n${this.entry.situation}\n\n`;
		markdown += `## Automatic Thoughts\n${this.entry.automaticThoughts}\n\n`;
		markdown += `## Emotions (${this.entry.emotionIntensityBefore}/10)\n${this.entry.emotions}\n\n`;
		
		if (this.entry.physicalReactions) {
			markdown += `## Physical Reactions\n${this.entry.physicalReactions}\n\n`;
		}
		
		if (this.entry.behaviors) {
			markdown += `## Behaviors\n${this.entry.behaviors}\n\n`;
		}
		
		if (this.entry.selectedDistortions.length > 0) {
			markdown += `## Cognitive Distortions\n`;
			this.entry.selectedDistortions.forEach(id => {
				const distortion = COGNITIVE_DISTORTIONS.find(d => d.id === id);
				if (distortion) {
					markdown += `- **${distortion.name}**\n`;
				}
			});
			markdown += `\n`;
		}
		
		if (this.entry.rationalThought) {
			markdown += `## Rational Thought\n${this.entry.rationalThought}\n\n`;
		}
		
		markdown += `## Emotion Intensity Change\n`;
		markdown += `**Before:** ${this.entry.emotionIntensityBefore}/10\n`;
		markdown += `**After:** ${this.entry.emotionIntensityAfter}/10\n`;
		
		if (intensityChange > 0) {
			markdown += `**Change:** ↓ ${intensityChange} points (${percentChange}% reduction)\n\n`;
		} else if (intensityChange < 0) {
			markdown += `**Change:** ↑ ${Math.abs(intensityChange)} points\n\n`;
		} else {
			markdown += `**Change:** No change\n\n`;
		}
		
		markdown += `${tags}\n`;
		
		return markdown;
	}

	async saveToFile(content: string) {
		const folderPath = this.settings.journalFolder;
		
		// Create folder if it doesn't exist
		const folder = this.app.vault.getAbstractFileByPath(folderPath);
		if (!folder) {
			await this.app.vault.createFolder(folderPath);
		}

		// Generate filename
		const timestamp = moment().format("YYYY-MM-DD-HHmmss");
		const filename = `${folderPath}/CBT-Entry-${timestamp}.md`;

		// Create file
		await this.app.vault.create(filename, content);
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}
