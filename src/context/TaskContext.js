import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Simple task" },
    { id: 2, title: "A complex task" },
  ]);

  const [taskToEdit, setTaskToEdit] = useState({
    id: "",
    title: "",
  });

  const addTask = (title) => {
    const taskObj = {
      id: uuid(),
      title,
    };
    setTasks(tasks.concat(taskObj));
  };

  const editTask = (taskId, taskTitle) => {
    const newTasks = tasks.map((t) => {
      if (t.id === taskId) {
        return { ...t, title: taskTitle };
      } else {
        return t;
      }
    });
    setTasks(newTasks);
    setTaskToEdit({
      id: "",
      title: "",
    });
  };

  const findTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    setTaskToEdit(() => task);
  };

  const removeTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        findTask,
        taskToEdit,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
