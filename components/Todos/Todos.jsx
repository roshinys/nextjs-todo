import React from "react";
import styles from "./Todos.module.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function Todos({ todos }) {
  return (
    <>
      <div className={styles.todos}>
        <h1>Todos</h1>
        <TodoList todos={todos} />
      </div>
      <AddTodo />
    </>
  );
}

export default Todos;
