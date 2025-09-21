import MainButton from "../../../UI/MainButton/MainButton";
import "./NavButtons.scss";
export default function NavButtons({ onClick }: any) {
  return (
    <div className="nav__buttons">
      <MainButton onClick={() => onClick("ToDo")}>Todo list</MainButton>
      <MainButton onClick={() => onClick("Registration")}>
        Registration
      </MainButton>
      <MainButton onClick={() => onClick("TicTacToe")}>TicTac</MainButton>
      <MainButton onClick={() => onClick("Users")}>Users</MainButton>
      <MainButton onClick={() => onClick("Posts")}>Posts</MainButton>
    </div>
  );
}
