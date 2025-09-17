import { useState } from "react";

import Header from "./components/Layout/HeaderSection/Header";
import MainSection from "./components/Layout/MainSection/MainSection";
import FooterSection from "./components/Layout/FooterSection/FooterSection";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const themes = {
    light: {
      background: "#ffffff",
      color: "#242424",
    },
    dark: {
      background: "#242424",
      color: "#ffffff",
    },
  };
  return (
    <>
      <Header themes={themes} theme={theme} setTheme={setTheme} />
      <MainSection themes={themes} theme={theme}></MainSection>
      <FooterSection></FooterSection>
    </>
  );
}

export default App;
