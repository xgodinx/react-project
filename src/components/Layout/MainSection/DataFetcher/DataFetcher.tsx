import { useEffect, useState } from "react";
import MainButton from "../../../UI/MainButton/MainButton";

import styles from "./DataFetcher.module.scss";
import axios from "axios";
export default function MessageComponent() {
  type TodoList = {
    id: number;
    title: string;
    completed: boolean;
  };

  const [isFetchAllowed, setIsFetchAllowed] = useState(false);
  const [isUpdateFetch, setIsUpdateFetch] = useState(false);
  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredTodoList, setFilteredTodoList] = useState<TodoList[]>([]);
  useEffect(() => {
    if (!isFetchAllowed) return;
    setLoading(true);
    setError("");
    const timer = setTimeout(() => {
      async function fetchTodos() {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos?_limit=20"
          );
          setTodoList(response.data);
          setFilteredTodoList(response.data);
        } catch (e: unknown) {
          if (axios.isAxiosError(e)) {
            console.log(e.code);
            setError(e.message);
            setTodoList([]);
          } else {
            console.error("unexpecterd error", e);
          }
        } finally {
          setLoading(false);
        }
      }
      fetchTodos();
    }, 1000);

    return () => clearTimeout(timer);
  }, [isFetchAllowed, isUpdateFetch]);

  const updateFetch = () => {
    setTodoList([]);
    setIsUpdateFetch((prev) => !prev);
    setError("");
  };

  const showCompletedTasks = () => {
    setFilteredTodoList(todoList.filter((task) => task.completed));
  };
  const showNotCompletedTasks = () => {
    setFilteredTodoList(todoList.filter((task) => !task.completed));
  };

  const showAllTasks = () => {
    setFilteredTodoList(todoList);
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todo__btns}>
        <MainButton
          className={styles.todo__btn}
          onClick={() => setIsFetchAllowed(true)}
        >
          Fetch data
        </MainButton>
        <MainButton onClick={updateFetch}>Update fetch</MainButton>
      </div>
      {loading && <p className={styles.todo__loading}>Loading...</p>}
      {error && (
        <p className={styles.todo__error}>Something went wrong, {error}</p>
      )}
      {!!todoList.length && (
        <div className={styles.todoList__btns}>
          <MainButton onClick={showAllTasks}>All</MainButton>
          <MainButton onClick={showCompletedTasks}>Completed</MainButton>
          <MainButton onClick={showNotCompletedTasks}>Not completed</MainButton>
        </div>
      )}
      {!!todoList.length && (
        <div className="todo__list">
          {filteredTodoList.map((todo) => {
            return (
              <ul key={todo.id}>
                <li>
                  {todo.id}. Title: {todo.title}
                </li>
                <li>Completed: {todo.completed ? "✅" : "❌"}</li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
}
