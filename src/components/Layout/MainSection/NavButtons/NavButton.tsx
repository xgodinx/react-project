import MainButton from "../MainButton/MainButton";
import "./NavButtons.scss";
export default function NavButtons({ onClick }: any) {
  return (
    <div className="nav__buttons">
      <MainButton onClick={() => onClick("ToDo")}>Todo list</MainButton>
      <MainButton onClick={() => onClick("Registration")}>
        Registration
      </MainButton>
      <MainButton onClick={() => onClick("TicTac")}>TicTac</MainButton>
      <MainButton onClick={() => onClick("Users")}>Users</MainButton>
    </div>
  );
}
