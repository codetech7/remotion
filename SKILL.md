---
name: Remotion Video Project
description: Scaffold a new Remotion video project with all necessary files and configuration
version: 1.0.0
---

# Remotion Video Project Setup

This skill scaffolds a complete Remotion video project for programmatic video creation.

## What will be created:

1. **package.json** - Project configuration with Remotion dependencies
2. **src/Root.tsx** - Registers Remotion compositions
3. **src/Composition.tsx** - Main video composition component
4. **remotion.config.ts** - Remotion configuration file
5. **tsconfig.json** - TypeScript configuration
6. **public/** - Directory for static assets

## Steps:

### 1. Create package.json

```json:package.json
{
  "name": "my-remotion-video",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "remotion studio",
    "build": "remotion render",
    "upgrade": "remotion upgrade",
    "dev": "remotion preview"
  },
  "dependencies": {
    "remotion": "^4.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@remotion/player": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0"
  }
}
```

### 2. Create src/Root.tsx

```typescript:src/Root.tsx
import { Composition } from "remotion";
import { MyComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComposition"
        component={MyComposition}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
```

### 3. Create src/Composition.tsx

```typescript:src/Composition.tsx
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 100,
        color: "white",
      }}
    >
      Hello World! Frame: {frame}
    </AbsoluteFill>
  );
};
```

### 4. Create remotion.config.ts

```typescript:remotion.config.ts
import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
```

### 5. Create tsconfig.json

```json:tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "ES2022"],
    "jsx": "react-jsx",
    "module": "ES2022",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src/**/*"]
}
```

### 6. Create public directory

Create an empty `public` directory for static assets:

```bash
mkdir -p public
```

### 7. Install dependencies

```bash
npm install
```

### 8. Start the Remotion Studio

```bash
npm start
```

This will open the Remotion Studio in your browser where you can preview and edit your video compositions.

## Next Steps

- Modify `src/Composition.tsx` to create your custom video content
- Add more compositions in `src/Root.tsx`
- Place static assets (images, fonts, etc.) in the `public/` directory
- Explore Remotion's documentation at https://www.remotion.dev/docs/

## Additional Resources

- [Remotion Documentation](https://www.remotion.dev/docs/)
- [Remotion Examples](https://www.remotion.dev/showcase)
- [Remotion GitHub](https://github.com/remotion-dev/remotion)
