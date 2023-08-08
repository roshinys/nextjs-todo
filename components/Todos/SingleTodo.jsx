import React from "react";
import styles from "./SingleTodo.module.css";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { todoActions } from "@/store/todo-slice";

function SingleTodo({ index, id, task, label }) {
  const dispatch = useDispatch();
  const isActiveTodo = label === "Todos" ? true : false;
  const deleteTodoHandler = () => {
    if (isActiveTodo) {
      dispatch(todoActions.delActiveTodos({ id }));
    } else {
      dispatch(todoActions.delCompletedTodos({ id }));
    }
  };

  const editTodoHandler = () => {
    onEditTodo(id);
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={styles.singleTodo}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h1>{task}</h1>
          <div>
            <button onClick={editTodoHandler}>Edit</button>
            <button onClick={deleteTodoHandler}>Delete</button>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
}

export default SingleTodo;
