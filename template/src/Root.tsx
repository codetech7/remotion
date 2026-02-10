import { Composition, registerRoot } from "remotion";
import { MyComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  const fps = 30;
  const duration = fps * 15; // 15 seconds total

  return (
    <>
      <Composition
        id="CodingEvolution"
        component={MyComposition}
        durationInFrames={duration}
        fps={fps}
        width={1920}
        height={1080}
      />
    </>
  );
};

registerRoot(RemotionRoot);
