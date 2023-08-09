import React from "react";
import Todos from "./Todos";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeStatus } from "@/store/todo-action";
import styles from "./TodosState.module.css";

function TodosState() {
  const { activeTodos, completedTodos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      //We can manipulate the index of arrays in same todos but will do that later
      return;
    }
    const add =
      source.droppableId === "Active"
        ? activeTodos[source.index]
        : completedTodos[source.index];
    dispatch(changeStatus(add));
  };

  return (
    <div className={styles.todosCard}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Todos todos={activeTodos} droppableId="Active" type="Todos" />
        <Todos todos={completedTodos} droppableId="Completed" type="Todos" />
      </DragDropContext>
    </div>
  );
}

export default TodosState;
