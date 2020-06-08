import React from "react";
import TaskContextProvider from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const TaskManager = () => {
  return (
    <TaskContextProvider>
      <h1>Todos</h1>
      <TaskForm />
      <TaskList />
    </TaskContextProvider>
  );
};

export default TaskManager;
