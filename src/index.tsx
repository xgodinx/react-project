import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";

import ToDo from "./components/Layout/MainSection/ToDo/ToDo";
import Users from "./components/Layout/MainSection/Users/Users.tsx";

import Registration from "./components/Layout/MainSection/Registration/Registration.tsx";
import TicTacToe from "./components/Layout/MainSection/TicTacToe/TicTacToe.tsx";
import Posts from "./components/Layout/MainSection/Posts/Posts.tsx";
import DataFetcher from "./components/Layout/MainSection/DataFetcher/DataFetcher.tsx";
import "./index.css";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "todo",
        element: <ToDo />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "tictactoe",
        element: <TicTacToe />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "datafetcher",
        element: <DataFetcher />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
