import React, { useState } from "react";
import styles from "./Todos.module.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function Todos({ todos, label }) {
  const showAddTodo = label === "Todos" ? true : false;

  return (
    <div className={styles.todos}>
      <h1>{label}</h1>
      <TodoList
        label={label}
        todos={todos}
      />
      {showAddTodo && <AddTodo />}
    </div>
  );
}

export default Todos;
