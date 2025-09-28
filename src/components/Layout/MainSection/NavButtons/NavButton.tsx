import { NavLink } from "react-router";
import MainButton from "../../../UI/MainButton/MainButton";
import "./NavButtons.scss";
export default function NavButtons() {
  return (
    <nav className="nav__buttons">
      <NavLink to="registration">
        <MainButton>Registration</MainButton>
      </NavLink>
      <NavLink to="users">
        <MainButton>Users</MainButton>
      </NavLink>
      <NavLink to="todo">
        <MainButton>Todo</MainButton>
      </NavLink>
      <NavLink to="posts">
        <MainButton>Posts</MainButton>
      </NavLink>
      <NavLink to="tictactoe">
        <MainButton>TicTac</MainButton>
      </NavLink>
      <NavLink to="datafetcher">
        <MainButton>DataFetcher</MainButton>
      </NavLink>
    </nav>
  );
}
