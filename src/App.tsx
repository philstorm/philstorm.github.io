// src/App.tsx
import React, { useState, useEffect } from "react";
import {
  Navigation,
  Main,
  Expertise,
  Timeline,
  GitHubProjects,
  Project,
  Contact,
  Footer,
  FadeIn,
} from "./components";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const toggleMode = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <Navigation parentToChild={{ mode }} modeChange={toggleMode} />

      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <GitHubProjects />
        <Project />
        <Contact />
      </FadeIn>

      <Footer />
    </div>
  );
}

export default App;
