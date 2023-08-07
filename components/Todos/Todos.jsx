import React, { useState } from "react";
import styles from "./Todos.module.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function Todos({ todos, label }) {
  const showAddTodo = label === "Todos" ? true : false;

  // const deleteTodoHandler = (todoId) => {
  //   setAllTodos((prevState) => {
  //     return prevState.filter((todo) => {
  //       return todo.id != todoId;
  //     });
  //   });
  // };

  // const editTodoHandler = () => {
  //   console.log("will edit later");
  // };

  return (
    <div className={styles.todos}>
      <h1>{label}</h1>
      <TodoList
        label={label}
        todos={todos}
        onDelTodo={() => {}}
        onEditTodo={() => {}}
      />
      {showAddTodo && <AddTodo />}
    </div>
  );
}

export default Todos;
