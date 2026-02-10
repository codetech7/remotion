# Using the Remotion Skills Package

## Installation

To use this skill package, you'll need to have Node.js and npm installed on your system.

### Method 1: Using npx skills (Recommended)

```bash
npx skills add remotion-dev/skills
```

This command will:
1. Download the Remotion skill from this repository
2. Detect your AI agent/development environment
3. Make the skill available for use

### Method 2: Manual Setup

If you prefer to set up the project manually, you can clone this repository and copy the template files:

```bash
# Clone the repository
git clone https://github.com/remotion-dev/skills.git

# Copy the template to your project directory
cp -r skills/template/* your-project-directory/

# Navigate to your project
cd your-project-directory

# Install dependencies
npm install
```

## Starting Your Project

After installation, you can start working with Remotion:

### 1. Install Dependencies

```bash
npm install
```

This will install:
- `remotion` - The core Remotion framework
- `react` and `react-dom` - React libraries
- `@remotion/player` - Remotion video player component
- TypeScript and type definitions

### 2. Start the Remotion Studio

```bash
npm start
```

This opens the Remotion Studio in your browser at `http://localhost:3000`. The studio provides:
- Live preview of your video
- Timeline scrubbing
- Component inspector
- Hot module reloading

### 3. Edit Your Video

Open `src/Composition.tsx` and start editing your video composition. Changes will be reflected immediately in the Remotion Studio.

### 4. Render Your Video

When you're ready to export your video:

```bash
npm run build
```

This will render your video to a file. You can customize the output format and other settings in `remotion.config.ts`.

## Project Structure Explained

```
your-project/
├── src/
│   ├── Root.tsx           # Composition registry
│   │                      # - Defines available video compositions
│   │                      # - Sets video dimensions, duration, and FPS
│   │
│   └── Composition.tsx    # Main video component
│                          # - Your actual video content
│                          # - Uses Remotion hooks and components
│
├── public/                # Static assets
│   └── index.html        # HTML template for Remotion Studio
│
├── package.json          # Project dependencies and scripts
├── remotion.config.ts    # Remotion configuration
└── tsconfig.json         # TypeScript configuration
```

## Next Steps

### Adding More Compositions

Edit `src/Root.tsx` to add more video compositions:

```tsx
<Composition
  id="MySecondVideo"
  component={MySecondComposition}
  durationInFrames={300}
  fps={30}
  width={1920}
  height={1080}
/>
```

### Using Static Assets

Place images, fonts, and other assets in the `public/` directory and reference them in your components:

```tsx
<img src="/my-image.png" alt="My Image" />
```

### Installing Additional Remotion Packages

Remotion has many additional packages for specific use cases:

```bash
# For 3D animations
npm install @remotion/three three @types/three

# For animations
npm install @remotion/transitions

# For audio visualization
npm install @remotion/media-utils
```

## Resources

- [Remotion Documentation](https://www.remotion.dev/docs/)
- [Remotion Examples](https://www.remotion.dev/showcase)
- [Remotion Discord Community](https://remotion.dev/discord)
- [Remotion GitHub](https://github.com/remotion-dev/remotion)

## Troubleshooting

### Port 3000 is already in use

If you see an error about port 3000 being in use, you can specify a different port:

```bash
PORT=3001 npm start
```

### TypeScript errors

Make sure you have TypeScript installed:

```bash
npm install --save-dev typescript
```

### Module not found errors

Try removing node_modules and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Getting Help

If you encounter issues:
1. Check the [Remotion documentation](https://www.remotion.dev/docs/)
2. Search [GitHub issues](https://github.com/remotion-dev/remotion/issues)
3. Join the [Discord community](https://remotion.dev/discord)
