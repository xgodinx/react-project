import "./MainSections.scss";

import NavButtons from "./NavButtons/NavButton";

function MainSection({ theme, themes, children }: any) {
  console.log(children);
  return (
    <main
      style={{
        backgroundColor: themes[theme].background,
        color: themes[theme].color,
      }}
    >
      <h1 className="main__title">Welcome to my training ground!</h1>
      <NavButtons />
      {children}
    </main>
  );
}

export default MainSection;
