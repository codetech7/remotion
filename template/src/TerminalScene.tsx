import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const TerminalScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  // HTML/CSS code to be typed
  const htmlCode = `<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 40px;
        border-radius: 10px;
        color: white;
      }
      h1 {
        font-size: 48px;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Welcome to Web Development</h1>
    </div>
  </body>
</html>`;

  // Calculate characters to show based on frame (typing effect)
  const charsToShow = Math.floor(interpolate(frame, [0, fps * 2.5], [0, htmlCode.length], {
    extrapolateRight: "clamp",
  }));

  const displayedCode = htmlCode.substring(0, charsToShow);

  // Fade out effect in the last 0.5 seconds
  const opacity = interpolate(frame, [fps * 2.5, fps * 3], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1e1e1e",
        opacity,
      }}
    >
      <div
        style={{
          padding: "40px",
          fontFamily: "'Courier New', monospace",
          fontSize: "18px",
          color: "#d4d4d4",
          whiteSpace: "pre-wrap",
          lineHeight: "1.6",
        }}
      >
        <div
          style={{
            color: "#4ec9b0",
            marginBottom: "20px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          $ vim index.html
        </div>
        <div style={{ color: "#ce9178" }}>
          {displayedCode}
          {charsToShow < htmlCode.length && (
            <span
              style={{
                backgroundColor: "#d4d4d4",
                animation: "blink 1s infinite",
              }}
            >
              &nbsp;
            </span>
          )}
        </div>
      </div>
      <style>
        {`
          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
        `}
      </style>
    </AbsoluteFill>
  );
};
