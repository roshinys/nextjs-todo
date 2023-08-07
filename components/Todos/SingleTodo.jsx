import React from "react";
import styles from "./SingleTodo.module.css";

function SingleTodo({ id, task }) {
  return (
    <div className={styles.singleTodo}>
      <h1>{task}</h1>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default SingleTodo;
