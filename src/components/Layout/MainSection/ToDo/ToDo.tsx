import MainButton from "../../../UI/MainButton/MainButton";
import { useEffect, useState } from "react";
import "./ToDo.scss";

type Task = {
  text: string;
  done: boolean;
};

export default function ToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch {
        console.error("Parsing error tasks");
      }
    }
  }, []);

  useEffect(() => {
    if (tasks.length !== 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks");
    }
  }, [tasks]);

  const addTask = (e: any) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const clearTasks = () => {
    setTasks([]);
    console.log("tasks cleared");
  };

  const filterTasks = (selectedIndex: any) => {
    setTasks(tasks.filter((_, index) => index !== selectedIndex));
  };

  const toggleTask = (index: number) => {
    setTasks(tasks.map((t, i) => (i === index ? { ...t, done: !t.done } : t)));
  };
  console.log("tasks added", tasks);
  return (
    <div className="todo">
      <h3 className="todo__title">Enter you task</h3>
      <form action="#" className="todo__form" onSubmit={addTask}>
        <input
          type="text"
          className="todo__input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="todo__buttons">
          <MainButton className="todo__btn-add" type="submit">
            Add
          </MainButton>
          <MainButton
            className="todo__btn-del"
            type="button"
            onClick={clearTasks}
          >
            Delete all
          </MainButton>
        </div>
      </form>
      <ul className="todo__list">
        {tasks.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={() => toggleTask(index)}
            />
            <span
              style={{
                textDecoration: item.done ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button
              onClick={() => filterTasks(index)}
              style={{ backgroundColor: "transparent", padding: "5px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
