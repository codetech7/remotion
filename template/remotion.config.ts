import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Use system Chrome instead of downloading
Config.setBrowserExecutable("/usr/bin/google-chrome");

// Use chrome-for-testing mode which uses --headless=new
Config.setChromeMode("chrome-for-testing");

// Add Chrome flags for rendering
Config.setChromiumOpenGlRenderer("angle");
