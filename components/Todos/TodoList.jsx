import React, { useState } from "react";
import SingleTodo from "./SingleTodo";
import styles from "./TodoList.module.css";

function TodoList({ todos, onDelTodo, onEditTodo }) {
  return (
    <div className={styles.wrapperTodos}>
      {todos.map((todo) => {
        return (
          <SingleTodo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            onDelTodo={onDelTodo}
            onEditTodo={onEditTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
