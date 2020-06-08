import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import styled from "styled-components";
import Task from "./Task";

const TaskListDisplay = styled.ul`
  width: 20rem;
  margin: 0 auto;
  @media (max-width: 600px) {
    min-width: 90%;
  }
`;

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <TaskListDisplay>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </TaskListDisplay>
  );
};

export default TaskList;
