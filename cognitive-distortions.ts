export interface CognitiveDistortion {
	id: string;
	name: string;
	description: string;
	example: string;
}

export const COGNITIVE_DISTORTIONS: CognitiveDistortion[] = [
	{
		id: "all-or-nothing",
		name: "All-or-Nothing Thinking",
		description: "Viewing situations in black-and-white categories with no middle ground.",
		example: "If I'm not perfect, I'm a total failure."
	},
	{
		id: "catastrophizing",
		name: "Catastrophizing",
		description: "Expecting the worst possible outcome, magnifying problems.",
		example: "If I fail this test, my entire future is ruined."
	},
	{
		id: "mind-reading",
		name: "Mind Reading",
		description: "Assuming you know what others are thinking without evidence.",
		example: "They think I'm stupid."
	},
	{
		id: "personalization",
		name: "Personalization",
		description: "Taking responsibility for things outside your control.",
		example: "It's my fault that my friend is upset."
	},
	{
		id: "should-statements",
		name: "Should Statements",
		description: "Using 'should', 'must', or 'ought' to motivate yourself, creating guilt.",
		example: "I should be able to handle this without any help."
	},
	{
		id: "emotional-reasoning",
		name: "Emotional Reasoning",
		description: "Believing that feelings reflect reality.",
		example: "I feel anxious, so something bad must be happening."
	},
	{
		id: "disqualifying-positive",
		name: "Disqualifying the Positive",
		description: "Rejecting positive experiences by insisting they don't count.",
		example: "They only said that to be nice, not because it's true."
	},
	{
		id: "labeling",
		name: "Labeling",
		description: "Assigning negative labels to yourself or others.",
		example: "I'm a loser. He's an idiot."
	},
	{
		id: "overgeneralization",
		name: "Overgeneralization",
		description: "Drawing broad conclusions from a single incident.",
		example: "I failed once, so I'll always fail."
	},
	{
		id: "mental-filter",
		name: "Mental Filter",
		description: "Focusing exclusively on negative details while filtering out positive aspects.",
		example: "Everyone praised my presentation, but one person looked bored, so it was terrible."
	}
];
