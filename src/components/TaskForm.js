import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import styled from "styled-components";

const AddTaskForm = styled.form`
  width: 20rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 0.5rem;
  @media (max-width: 600px) {
    max-width: 95%;
  }
`;

const AddTaskButton = styled.button`
  cursor: pointer;
  padding: 0.4rem 0.2rem;
  background: #005b96;
  color: #98c1d9;
  border: 2px solid #333;
  border-radius: 5px;
`;

const InputTaskButton = styled.input`
  padding: 0.4rem 0.2rem;
  border: 2px solid #333;
  font-size: 16px;
  outline: none;
`;

const TaskForm = () => {
  const { addTask, taskToEdit, editTask } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit.title === "") {
      addTask(taskTitle);
    } else {
      editTask(taskToEdit.id, taskTitle);
    }
    setTaskTitle("");
  };

  useEffect(() => {
    if (taskToEdit.title !== "") {
      setTaskTitle(taskToEdit.title);
    }
  }, [taskToEdit.title]);

  const handleChange = (e) => {
    const currentValue = e.target.value;
    setTaskTitle(currentValue);
  };

  return (
    <AddTaskForm onSubmit={handleSubmit}>
      <InputTaskButton value={taskTitle} onChange={handleChange} />
      <AddTaskButton type="submit">
        {taskToEdit.title === "" ? "Add Task" : "Edit Task"}
      </AddTaskButton>
    </AddTaskForm>
  );
};

export default TaskForm;
