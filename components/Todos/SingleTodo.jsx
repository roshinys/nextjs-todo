import React from "react";
import styles from "./SingleTodo.module.css";

function SingleTodo({ id, task, onDelTodo, onEditTodo }) {
  const deleteTodoHandler = () => {
    onDelTodo(id);
  };

  const editTodoHandler = () => {
    onEditTodo(id);
  };

  return (
    <div className={styles.singleTodo}>
      <h1>{task}</h1>
      <div>
        <button onClick={editTodoHandler}>Edit</button>
        <button onClick={deleteTodoHandler}>Delete</button>
      </div>
    </div>
  );
}

export default SingleTodo;
