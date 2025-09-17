import reactLogo from "../../../assets/react.svg";
import viteLogo from "../../../assets/vite.svg";
import HeaderTime from "./HeaderTime";
import "./Header.scss";

import ThemeButton from "../../ThemeButton/ThemeButton";

function Header({ theme, setTheme, themes }: any) {
  return (
    <header className="header">
      <div className="logo__row">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo__vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo__react" alt="React logo" />
        </a>
      </div>
      <ThemeButton
        theme={theme}
        themes={themes}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Switch Theme (early beta)
      </ThemeButton>
      <div className="header__time">
        <HeaderTime theme={theme} themes={themes} />
      </div>
    </header>
  );
}

export default Header;
