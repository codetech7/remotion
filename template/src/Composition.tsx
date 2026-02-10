import { AbsoluteFill, Sequence } from "remotion";
import { TerminalScene } from "./TerminalScene";
import { AIPromptScene } from "./AIPromptScene";
import { LandingPageScene } from "./LandingPageScene";

export const MyComposition: React.FC = () => {
  const fps = 30;
  
  // Scene durations in frames (30 fps)
  const terminalDuration = fps * 3; // 3 seconds
  const aiPromptDuration = fps * 3; // 3 seconds
  const landingPageDuration = fps * 9; // 9 seconds
  
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Terminal Scene: 0-3 seconds */}
      <Sequence from={0} durationInFrames={terminalDuration}>
        <TerminalScene />
      </Sequence>

      {/* AI Prompt Scene: 3-6 seconds */}
      <Sequence from={terminalDuration} durationInFrames={aiPromptDuration}>
        <AIPromptScene />
      </Sequence>

      {/* Landing Page Scene: 6-15 seconds */}
      <Sequence from={terminalDuration + aiPromptDuration} durationInFrames={landingPageDuration}>
        <LandingPageScene />
      </Sequence>
    </AbsoluteFill>
  );
};
