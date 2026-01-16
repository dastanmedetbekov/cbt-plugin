# How to Install and Use CBT Journal Plugin

## Installation Instructions

### Option 1: Install in Obsidian Vault (Recommended for Testing)

1. **Copy plugin files to your vault:**
   ```bash
   # Replace /path/to/your/vault with your actual vault path
   mkdir -p /path/to/your/vault/.obsidian/plugins/cbt-journal
   cp main.js manifest.json styles.css /path/to/your/vault/.obsidian/plugins/cbt-journal/
   ```

2. **Reload Obsidian:**
   - Open Obsidian
   - Go to Settings → Community Plugins
   - Turn off "Safe mode" if it's on
   - Click "Reload" or restart Obsidian

3. **Enable the plugin:**
   - In Settings → Community Plugins
   - Find "CBT Journal" in the list
   - Toggle it ON

### Option 2: Development Mode

If you want to develop and test changes:

```bash
# In the plugin directory
npm run dev
```

This will watch for changes and rebuild automatically.

## Using the Plugin

### Quick Start

1. **Open CBT Entry Form:**
   - Click the brain icon in the left ribbon, OR
   - Press `Ctrl/Cmd + P` and type "New CBT Entry"

2. **Fill out the form:**
   
   **Situation** (Required)
   - Describe what happened that triggered your thoughts
   - Example: "My friend didn't reply to my message for 3 hours"
   
   **Automatic Thoughts** (Required)
   - What immediately came to mind?
   - Example: "They're angry at me. They don't want to be friends anymore."
   
   **Emotions** (Required)
   - Name the feelings you experienced
   - Example: "Anxiety, fear, sadness"
   
   **Emotion Intensity (Before)** (Required)
   - Use the slider to rate 0-10
   - 0 = No emotion, 10 = Extreme emotion
   
   **Physical Reactions** (Optional)
   - Body sensations you noticed
   - Example: "Tight chest, racing heart, stomach knot"
   
   **Behaviors** (Optional)
   - What you did in response
   - Example: "Checked my phone repeatedly, sent another message"
   
   **Cognitive Distortions** (Optional)
   - Select all that apply to your automatic thoughts
   - Each distortion has a description and example
   
   **Rational Thought** (Optional but recommended)
   - Write a more balanced, realistic perspective
   - Example: "They're probably just busy. One delayed reply doesn't mean they hate me."
   
   **Emotion Intensity (After)** (Optional)
   - Rate your emotions after reframing
   - Notice how much they changed

3. **Save:**
   - Click "Save Entry"
   - A new markdown note will be created in your "CBT Journal" folder

## Understanding Cognitive Distortions

### 1. All-or-Nothing Thinking
Seeing things in black and white with no middle ground.
- Example: "If I'm not perfect, I'm a total failure."

### 2. Catastrophizing
Expecting the worst possible outcome.
- Example: "If I fail this test, my entire future is ruined."

### 3. Mind Reading
Assuming you know what others think without evidence.
- Example: "They think I'm stupid."

### 4. Personalization
Taking responsibility for things outside your control.
- Example: "It's my fault that my friend is upset."

### 5. Should Statements
Using "should," "must," or "ought" to motivate yourself.
- Example: "I should be able to handle this without help."

### 6. Emotional Reasoning
Believing your feelings reflect reality.
- Example: "I feel anxious, so something bad must be happening."

### 7. Disqualifying the Positive
Rejecting positive experiences as "not counting."
- Example: "They only said that to be nice, not because it's true."

### 8. Labeling
Assigning negative labels to yourself or others.
- Example: "I'm a loser. He's an idiot."

### 9. Overgeneralization
Drawing broad conclusions from a single incident.
- Example: "I failed once, so I'll always fail."

### 10. Mental Filter
Focusing only on negative details while filtering out positive.
- Example: "One person looked bored, so my presentation was terrible."

## Settings

Access settings via: Settings → Community Plugins → CBT Journal → ⚙️

### Journal Folder
- Default: "CBT Journal"
- Change where entries are saved
- Folder will be created automatically if it doesn't exist

### Date Format
- Default: "YYYY-MM-DD"
- Uses moment.js format
- Examples:
  - `YYYY-MM-DD` → 2026-01-16
  - `DD/MM/YYYY` → 16/01/2026
  - `MMMM Do, YYYY` → January 16th, 2026

### Show Distortion Descriptions
- Default: ON
- Shows description and example for each cognitive distortion
- Turn off for a cleaner, more compact view

## Tips for Effective Use

1. **Be Honest:** Write your real thoughts, even if they seem irrational
2. **Be Specific:** Detailed situations and thoughts are easier to work with
3. **Practice Regularly:** The more you use it, the better you'll get at identifying patterns
4. **Review Your Entries:** Look back at previous entries to see your progress
5. **Don't Rush:** Take time to really think about rational alternatives
6. **Use Tags:** Your entries are automatically tagged - use them to find patterns

## Example Entry Output

Your saved entry will look like this:

```markdown
---
date: 2026-01-16
time: 14:30
emotion-before: 8
emotion-after: 3
tags: [cbt, mind-reading, catastrophizing]
---

# CBT Entry - 2026-01-16

## 🎯 Situation
My friend didn't reply to my message for 3 hours

## 💭 Automatic Thoughts
They're angry at me. They don't want to be friends anymore.

## 😰 Emotions (8/10)
Anxiety, fear, sadness

## 🫀 Physical Reactions
Tight chest, racing heart, stomach knot

## 🏃 Behaviors
Checked my phone repeatedly, sent another message

## 🧠 Cognitive Distortions
- ❌ **Mind Reading**
- ❌ **Catastrophizing**

## ✅ Rational Thought
They're probably just busy. One delayed reply doesn't mean they hate me. I've been late replying before too.

## 📊 Emotion Intensity Change
**Before:** 8/10
**After:** 3/10
**Change:** ↓ 5 points (63% reduction)

#cbt #mind-reading #catastrophizing
```

## Troubleshooting

**Q: Plugin doesn't appear in Community Plugins**
- Make sure files are in the correct location: `<vault>/.obsidian/plugins/cbt-journal/`
- Check that all three files are present: `main.js`, `manifest.json`, `styles.css`
- Restart Obsidian

**Q: Brain icon doesn't appear**
- Make sure the plugin is enabled in Settings
- Check that Safe Mode is OFF

**Q: Entries aren't saving**
- Check folder path in settings
- Make sure you have write permissions in your vault

**Q: Can't see cognitive distortion descriptions**
- Enable "Show distortion descriptions" in settings

## Development

Want to modify the plugin?

```bash
# Install dependencies
npm install

# Start development mode (watches for changes)
npm run dev

# Build for production
npm run build
```

## Support

This is a tool for self-reflection and personal growth. It is **not** a substitute for professional mental health care. If you're struggling, please reach out to a qualified therapist or counselor.

---

**Enjoy tracking your thoughts and building emotional resilience! 🧠✨**
