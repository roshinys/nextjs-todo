import React, { useState } from "react";
import SingleTodo from "./SingleTodo";
import styles from "./TodoList.module.css";
// const DUMMY_TODOS = [
//   {
//     id: 1,
//     task: "Eat",
//   },
//   {
//     id: 2,
//     task: "Sleep",
//   },
//   {
//     id: 1,
//     task: "Study",
//   },
//   {
//     id: 1,
//     task: "Drink",
//   },
// ];

function TodoList(props) {
  const [todos, setTodos] = useState(props.todos ? props.todos : []);
  return (
    <div className={styles.wrapperTodos}>
      {todos.map((todo) => {
        return <SingleTodo key={todo.id} id={todo.id} task={todo.task} />;
      })}
    </div>
  );
}

export default TodoList;
