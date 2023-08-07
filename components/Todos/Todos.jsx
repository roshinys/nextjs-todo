import React, { useState } from "react";
import styles from "./Todos.module.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function Todos({ todos }) {
  const [allTodos, setAllTodos] = useState(todos ? todos : []);

  const addTodoHandler = (taskname) => {
    setAllTodos((prevState) => {
      return [...prevState, { task: taskname, id: Math.random() }];
    });
  };

  const deleteTodoHandler = (todoId) => {
    setAllTodos((prevState) => {
      return prevState.filter((todo) => {
        return todo.id != todoId;
      });
    });
  };

  const editTodoHandler = () => {
    console.log("will edit later");
  };

  return (
    <>
      <div className={styles.todos}>
        <h1>Todos</h1>
        <TodoList
          todos={allTodos}
          onDelTodo={deleteTodoHandler}
          onEditTodo={editTodoHandler}
        />
      </div>
      <AddTodo onAddTodo={addTodoHandler} />
    </>
  );
}

export default Todos;
