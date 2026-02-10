import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

export const LandingPageScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  // Fade in at the beginning
  const fadeIn = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Hero section animations
  const heroSlideIn = spring({
    frame: frame - fps * 0.2,
    fps,
    config: {
      damping: 100,
    },
  });

  const heroOpacity = interpolate(heroSlideIn, [0, 1], [0, 1]);
  const heroTranslateY = interpolate(heroSlideIn, [0, 1], [50, 0]);

  // CTA button zoom
  const ctaScale = spring({
    frame: frame - fps * 0.8,
    fps,
    config: {
      damping: 80,
    },
  });

  // Features section slide in
  const featuresSlideIn = spring({
    frame: frame - fps * 1.5,
    fps,
    config: {
      damping: 100,
    },
  });

  const featuresOpacity = interpolate(featuresSlideIn, [0, 1], [0, 1]);
  const featuresTranslateX = interpolate(featuresSlideIn, [0, 1], [-50, 0]);

  // Individual feature cards with stagger
  const getFeatureAnimation = (index: number) => {
    return spring({
      frame: frame - fps * (2 + index * 0.2),
      fps,
      config: {
        damping: 80,
      },
    });
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0a",
        opacity: fadeIn,
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Hero Section */}
      <div
        style={{
          padding: "80px 40px",
          textAlign: "center",
          opacity: heroOpacity,
          transform: `translateY(${heroTranslateY}px)`,
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "800",
            margin: "0 0 20px 0",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Build the Future
        </h1>
        <p
          style={{
            fontSize: "24px",
            color: "#a0a0a0",
            margin: "0 0 40px 0",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Create stunning applications with cutting-edge technology
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            transform: `scale(${ctaScale})`,
          }}
        >
          <button
            style={{
              padding: "16px 40px",
              fontSize: "18px",
              fontWeight: "600",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Get Started
          </button>
          <button
            style={{
              padding: "16px 40px",
              fontSize: "18px",
              fontWeight: "600",
              background: "transparent",
              color: "#667eea",
              border: "2px solid #667eea",
              borderRadius: "8px",
              cursor: "pointer",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div
        style={{
          padding: "40px",
          opacity: featuresOpacity,
          transform: `translateX(${featuresTranslateX}px)`,
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "700",
            textAlign: "center",
            color: "white",
            marginBottom: "60px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Key Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            { icon: "⚡", title: "Lightning Fast", desc: "Optimized for performance" },
            { icon: "🔒", title: "Secure", desc: "Enterprise-grade security" },
            { icon: "🎨", title: "Beautiful", desc: "Stunning design out of the box" },
          ].map((feature, index) => {
            const cardScale = getFeatureAnimation(index);
            return (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  padding: "40px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  textAlign: "center",
                  transform: `scale(${cardScale})`,
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "20px" }}>{feature.icon}</div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "white",
                    margin: "0 0 12px 0",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#a0a0a0",
                    margin: 0,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
