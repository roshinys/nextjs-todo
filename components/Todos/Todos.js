import React, { useState } from "react";
import styles from "./Todos.module.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function Todos({ todos, droppableId, type }) {
  const showAddTodo = droppableId === "Active";

  return (
    <div className={styles.todos}>
      <h1>{droppableId}</h1>
      <TodoList droppableId={droppableId} todos={todos} type={type} />
      {showAddTodo && <AddTodo />}
    </div>
  );
}

export default Todos;
