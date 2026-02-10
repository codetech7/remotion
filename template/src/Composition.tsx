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
