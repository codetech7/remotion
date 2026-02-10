import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const AIPromptScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  const userPrompt = "Build me a modern landing page for a tech startup with a hero section, features, and CTA buttons.";
  const aiResponse = "I'll create a stunning modern landing page for you with:\n\n✓ Hero section with gradient background\n✓ Engaging headline and subheadline\n✓ Clear call-to-action buttons\n✓ Features section with icons\n✓ Responsive design\n✓ Smooth animations\n\nLet me generate that for you...";

  // Show user message immediately
  const showUserMessage = frame >= 0;

  // Start showing AI response after 1 second
  const aiStartFrame = fps * 1;
  const aiTypingDuration = fps * 1.5;
  
  const aiCharsToShow = Math.floor(
    interpolate(frame, [aiStartFrame, aiStartFrame + aiTypingDuration], [0, aiResponse.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const displayedAiResponse = aiResponse.substring(0, aiCharsToShow);

  // Fade out in the last 0.5 seconds
  const opacity = interpolate(frame, [fps * 2.5, fps * 3], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Frame-based cursor blink (blinks every 15 frames = 0.5 seconds)
  const cursorVisible = Math.floor(frame / 15) % 2 === 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#343541",
        opacity,
        padding: "40px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          ChatGPT
        </div>

        {/* User Message */}
        {showUserMessage && (
          <div
            style={{
              backgroundColor: "#444654",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                color: "#9a9a9a",
                fontSize: "14px",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              You
            </div>
            <div
              style={{
                color: "#ececec",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              {userPrompt}
            </div>
          </div>
        )}

        {/* AI Response */}
        {frame >= aiStartFrame && (
          <div
            style={{
              backgroundColor: "#444654",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                color: "#10a37f",
                fontSize: "14px",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Assistant
            </div>
            <div
              style={{
                color: "#ececec",
                fontSize: "16px",
                lineHeight: "1.6",
                whiteSpace: "pre-wrap",
              }}
            >
              {displayedAiResponse}
              {aiCharsToShow < aiResponse.length && cursorVisible && (
                <span style={{ backgroundColor: "#ececec", marginLeft: "2px" }}>
                  &nbsp;
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
