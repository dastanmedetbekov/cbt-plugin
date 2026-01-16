# CBT Journal Plugin for Obsidian

A Cognitive Behavioral Therapy (CBT) journaling plugin for Obsidian that helps you track thoughts, emotions, and cognitive distortions.

## Features

- **Structured CBT Entries** - Guided form for documenting situations, thoughts, emotions, and behaviors
- **10 Cognitive Distortions** - Identify thinking patterns with descriptions and examples
- **Emotion Tracking** - Visual sliders to track emotion intensity before and after reframing (0-10 scale)
- **Rational Thoughts** - Space to develop balanced, alternative perspectives
- **Auto-tagging** - Entries automatically tagged with cognitive distortions and custom tags
- **Markdown Files** - All entries saved as formatted markdown notes
- **Customizable** - Configure journal folder, date format, custom tags, and distortion descriptions

## How to Use

1. Click the brain icon in the ribbon, or use the command palette (Ctrl/Cmd+P) and search for "New CBT Entry"
2. Fill out the form:
   - **Situation**: Describe what happened
   - **Automatic Thoughts**: What came to mind immediately
   - **Emotions**: Name the emotions you felt
   - **Emotion Intensity (Before)**: Rate 0-10
   - **Physical Reactions**: Body sensations
   - **Behaviors**: What you did in response
   - **Cognitive Distortions**: Select applicable thinking patterns
   - **Rational Thought**: Write a more balanced perspective
   - **Emotion Intensity (After)**: Rate 0-10 after reframing
3. Click "Save Entry" to create a new note in your CBT Journal folder

## The 10 Cognitive Distortions

1. **All-or-Nothing Thinking** - Black-and-white thinking with no middle ground
2. **Catastrophizing** - Expecting the worst possible outcome
3. **Mind Reading** - Assuming you know what others think
4. **Personalization** - Taking responsibility for things outside your control
5. **Should Statements** - Using "should," "must," or "ought"
6. **Emotional Reasoning** - Believing feelings reflect reality
7. **Disqualifying the Positive** - Rejecting positive experiences
8. **Labeling** - Assigning negative labels
9. **Overgeneralization** - Drawing broad conclusions from single events
10. **Mental Filter** - Focusing only on negatives

## Settings

- **Journal Folder**: Choose where CBT entries are saved (default: "CBT Journal")
- **Date Format**: Customize date format using moment.js syntax
- **Show Descriptions**: Toggle cognitive distortion descriptions and examples
- **Custom Tag**: Set your main tag for CBT entries (default: "cbt")

## Installation

### Manual Installation
1. Download the latest release
2. Extract files to `<vault>/.obsidian/plugins/cbt-journal/`
3. Reload Obsidian
4. Enable "CBT Journal" in Settings → Community Plugins

### Development
```bash
npm install
npm run dev
```

## Support

If you find this plugin helpful, consider supporting its development!

## License

MIT

## Disclaimer

This plugin is a tool for self-reflection and is not a substitute for professional mental health care. If you're struggling with mental health issues, please consult a qualified therapist or counselor.
