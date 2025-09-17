import MainButton from "../MainButton/MainButton";
import { useEffect, useState } from "react";
import "./ToDo.scss";
export default function ToDo({ theme, themes }: any) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  console.log("tasks >", tasks);

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
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (e: any) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
    console.log("tasks added");
  };

  const clearTasks = () => {
    setTasks([]);
    console.log("tasks cleared");
  };

  return (
    <div className="todo">
      <h3 className="todo__title">Enter you task</h3>
      <form
        style={{
          backgroundColor: themes[theme].background,
          color: themes[theme].color,
        }}
        action="#"
        className="todo__form"
        onSubmit={addTask}
      >
        <input
          type="text"
          className="todo__input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="todo__buttons">
          <MainButton
            theme={theme}
            themes={themes}
            className="todo__btn-add"
            type="submit"
          >
            Add
          </MainButton>
          <MainButton
            theme={theme}
            themes={themes}
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
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
