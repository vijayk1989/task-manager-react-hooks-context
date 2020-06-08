import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import styled from "styled-components";

const DeleteButton = styled.i`
  cursor: pointer;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  align-items: center;
`;

const EditButton = styled.i`
  cursor: pointer;
`;

const ButtonList = styled.div`
  display: flex;
  width: 3rem;
  justify-content: space-between;
`;

const Task = ({ task }) => {
  const { removeTask, findTask } = useContext(TaskContext);
  return (
    <TaskItem key={task.id}>
      <div>{task.title} </div>
      <ButtonList>
        <DeleteButton
          onClick={() => removeTask(task.id)}
          className="fas fa-trash-alt"
        ></DeleteButton>
        <EditButton
          onClick={() => findTask(task.id)}
          className="fas fa-edit"
        ></EditButton>
      </ButtonList>
    </TaskItem>
  );
};

export default Task;
