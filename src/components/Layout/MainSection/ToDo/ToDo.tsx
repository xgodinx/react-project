import MainButton from "../MainButton/MainButton";
import { useEffect, useState } from "react";
import "./ToDo.scss";
export default function ToDo({ theme, themes }: any) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [checkbox, setCheckbox] = useState(false);
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
    localStorage.setItem("tasks", JSON.stringify(tasks));
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

  const filterTasks = (selectedIndex: any) => {
    setTasks(tasks.filter((_, index) => index !== selectedIndex));
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
          <li key={index}>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => setCheckbox(e.target.checked)}
            />
            {item}
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
