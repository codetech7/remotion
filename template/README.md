# Coding Evolution - Remotion Video Composition

This Remotion composition demonstrates the evolution of coding from manual HTML/CSS to AI-assisted development.

## Video Structure

The video is **15 seconds** long at **30 fps** (1920x1080) and consists of three sequential scenes with fade transitions:

### Scene 1: Terminal Scene (0-3 seconds)
- **Duration**: 3 seconds
- **Style**: Classic dark terminal aesthetic (#1e1e1e background)
- **Content**: HTML/CSS code being typed character-by-character
- **Features**:
  - Animated typing effect showing complete HTML structure
  - Syntax highlighting (teal for terminal prompt, beige for code)
  - Blinking cursor during typing
  - Fade out transition at the end (2.5-3s)

### Scene 2: AI Prompt Scene (3-6 seconds)
- **Duration**: 3 seconds
- **Style**: ChatGPT-style interface (#343541 background)
- **Content**: User prompt and AI response
- **Features**:
  - User message appears immediately
  - AI response types out character-by-character (starts at 1s)
  - ChatGPT-style message bubbles with distinct colors
  - Blinking cursor during AI response typing
  - Fade out transition at the end (2.5-3s)

### Scene 3: Landing Page Scene (6-15 seconds)
- **Duration**: 9 seconds
- **Style**: Modern minimalist tech/SaaS design
- **Content**: Fully animated landing page
- **Animations**:
  - **Fade in**: Overall scene fades in (0-0.5s)
  - **Hero section**: Slides in from below with fade (0.2s delay)
    - Gradient headline: "Build the Future"
    - Subheadline with description
  - **CTA buttons**: Zoom in animation (0.8s delay)
    - "Get Started" button (gradient)
    - "Learn More" button (outlined)
  - **Features section**: Slides in from left (1.5s delay)
    - Three feature cards with staggered animations
    - Cards zoom in individually (2s, 2.2s, 2.4s)
    - Icons: ⚡ Lightning Fast, 🔒 Secure, 🎨 Beautiful

## Design Details

### Terminal Scene
- Font: Courier New, monospace
- Colors:
  - Background: #1e1e1e
  - Terminal prompt: #4ec9b0 (teal)
  - Code text: #ce9178 (beige)
  - Cursor: #d4d4d4 (light gray)

### AI Prompt Scene
- Font: System UI, sans-serif
- Colors:
  - Background: #343541 (dark gray)
  - Message background: #444654
  - User label: #9a9a9a (gray)
  - Assistant label: #10a37f (green)
  - Text: #ececec (off-white)

### Landing Page Scene
- Font: System UI, sans-serif
- Colors:
  - Background: #0a0a0a (near black)
  - Gradient: Purple to violet (120, 119, 198)
  - Headline: Linear gradient (#667eea to #764ba2)
  - Text: #a0a0a0 (gray)
  - Cards: rgba(255, 255, 255, 0.05) with backdrop blur

## Technical Implementation

### Transitions
All fade transitions are implemented using Remotion's `interpolate` function:
- Each scene manages its own fade out in the last 0.5 seconds
- Seamless transitions between scenes using `Sequence` components

### Animations
- **Typing effects**: Using `interpolate` to gradually show characters
- **Spring animations**: Using `spring` for natural, physics-based movements
- **Staggered animations**: Individual delays for each feature card

### File Structure
```
src/
├── Root.tsx              # Registers the "CodingEvolution" composition
├── Composition.tsx       # Main orchestrator with Sequence components
├── TerminalScene.tsx     # Scene 1: Terminal typing
├── AIPromptScene.tsx     # Scene 2: ChatGPT interface
└── LandingPageScene.tsx  # Scene 3: Modern landing page
```

## Running the Project

### Install Dependencies
```bash
npm install
```

### Start Remotion Studio
```bash
npm start
```

This will open the Remotion Studio in your browser where you can:
- Preview the composition
- Scrub through the timeline
- Export the video

### Render the Video
The video composition can be rendered using the Remotion CLI:

```bash
npx remotion render src/Root.tsx CodingEvolution out/video.mp4
```

This will:
1. Bundle the React code
2. Launch a headless browser
3. Render all 450 frames (15 seconds × 30 fps)
4. Encode the frames into an MP4 video
5. Save the output to `out/video.mp4`

**Note**: The configuration in `remotion.config.ts` includes:
- Optional environment variable `BROWSER_EXECUTABLE` to use a specific browser path
- `chrome-for-testing` mode for compatibility with newer Chrome versions
- JPEG image format for video frames
- Output overwrite enabled

To use a specific Chrome installation, set the environment variable:
```bash
BROWSER_EXECUTABLE=/path/to/chrome npx remotion render src/Root.tsx CodingEvolution out/video.mp4
```

## Key Features

✅ **15-second duration** (meets 10-15 second requirement)  
✅ **Fade transitions** between all scenes  
✅ **Silent video** (no audio)  
✅ **Smooth animations** using Remotion's spring and interpolate  
✅ **Professional appearance** with modern design  
✅ **Terminal typing effect** with blinking cursor  
✅ **ChatGPT-style interface** with realistic message flow  
✅ **Modern landing page** inspired by molecules.com aesthetic  
✅ **Multiple animation types**: fade, slide, zoom, and stagger effects

## Customization

You can easily customize:
- **Duration**: Change `fps * X` values in `Composition.tsx`
- **Colors**: Update hex colors in each scene component
- **Content**: Edit the `htmlCode`, `userPrompt`, `aiResponse`, and landing page text
- **Animations**: Adjust `spring` config or `interpolate` ranges
- **Timing**: Modify frame delays for each animation

## Notes

- All animations are programmatically created using React components
- No external video files or assets required
- Fully responsive to duration changes
- Easy to extend with additional scenes or animations
