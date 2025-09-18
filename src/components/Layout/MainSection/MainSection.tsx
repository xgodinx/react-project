import "./MainSections.scss";
// import MainButton from "./MainButton/MainButton";
import { useState } from "react";
import ToDo from "./ToDo/ToDo";
import Users from "./Users/Users";
import NavButtons from "./NavButtons/NavButton";
import Registration from "./Registration/Registration";
import TicTacToe from "./TicTacToe/TicTacToe";
function MainSection({ theme, themes }: any) {
  const [page, setPage] = useState("");

  return (
    <main
      style={{
        backgroundColor: themes[theme].background,
        color: themes[theme].color,
      }}
    >
      <h1 className="main__title">Welcome to my training ground!</h1>
      <NavButtons onClick={setPage}></NavButtons>
      {page === "ToDo" && <ToDo theme={theme} themes={themes}></ToDo>}
      {page === "Users" && <Users></Users>}
      {page === "Registration" && <Registration></Registration>}
      {page === "TicTacToe" && <TicTacToe></TicTacToe>}
    </main>
  );
}

export default MainSection;
