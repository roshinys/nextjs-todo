import React from "react";
import SingleTodo from "./SingleTodo";
import styles from "./TodoList.module.css";
import { Droppable } from "react-beautiful-dnd";

function TodoList({ label, todos }) {
  return (
    <Droppable droppableId={label}>
      {(provided) => (
        <div
          className={styles.wrapperTodos}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {todos?.map((todo, index) => {
            return (
              <SingleTodo
                key={todo?.id}
                id={todo?.id}
                index={index}
                task={todo?.todo}
                label={label}
              />
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TodoList;
