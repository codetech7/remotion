import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Use system Chrome if BROWSER_EXECUTABLE env var is set
// Otherwise, let Remotion download and use its own Chrome
if (process.env.BROWSER_EXECUTABLE) {
  Config.setBrowserExecutable(process.env.BROWSER_EXECUTABLE);
}

// Use chrome-for-testing mode which uses --headless=new
Config.setChromeMode("chrome-for-testing");

// Add Chrome flags for rendering
Config.setChromiumOpenGlRenderer("angle");
