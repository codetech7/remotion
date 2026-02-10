# Remotion Skills

A GitHub Skills package for scaffolding Remotion video projects.

## Quick Start

To scaffold a new Remotion project using this skill, run:

```bash
npx skills add remotion-dev/skills
```

This will set up a complete Remotion video project with:
- React and TypeScript configuration
- Remotion Studio setup
- Example video composition
- All necessary dependencies

## What is Remotion?

Remotion is a framework for creating videos programmatically using React. With Remotion, you can:
- Create videos using React components
- Render videos server-side
- Build dynamic video templates
- Leverage the entire npm ecosystem

## Project Structure

After running the skill, you'll have:

```
my-remotion-video/
├── src/
│   ├── Root.tsx           # Registers your compositions
│   └── Composition.tsx    # Your video component
├── public/                # Static assets
├── package.json
├── remotion.config.ts
└── tsconfig.json
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Remotion Studio:
   ```bash
   npm start
   ```

3. Build your video:
   ```bash
   npm run build
   ```

## Learn More

- [Remotion Documentation](https://www.remotion.dev/docs/)
- [Remotion Examples](https://www.remotion.dev/showcase)
- [Skills Documentation](https://github.com/vercel-labs/skills)
