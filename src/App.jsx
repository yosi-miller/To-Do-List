import React, { useState } from "react";
import "./App.css"
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <ToDoInput onAddTask={addTask} />
      <ToDoList title="My Tasks" tasks={tasks} />
    </div>
  );
}

export default App;
