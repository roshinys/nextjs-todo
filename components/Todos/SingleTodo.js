import React from "react";
import styles from "./SingleTodo.module.css";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { changeStatus, delTodo } from "@/store/todo-action";

function SingleTodo({ index, todo, droppableId }) {
  const isActiveTodo = droppableId === "Active";
  const updatedStatus = isActiveTodo ? "Completed" : "Active";
  const dispatch = useDispatch();
  const deleteTodoHandler = () => {
    dispatch(delTodo(todo._id, isActiveTodo));
  };

  const editTodoHandler = () => {
    console.log("will do it later");
  };

  const statusChangeHandler = () => {
    dispatch(changeStatus(todo));
  };

  return (
    <Draggable draggableId={todo._id} index={index} type="Todos">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          data-rbd-draggable-context-id="0"
          data-rbd-drag-handle-context-id="0"
          className={styles.singleTodo}
        >
          <h1>{todo?.todo}</h1>
          <div>
            <button onClick={statusChangeHandler}>{updatedStatus}</button>
            <button onClick={editTodoHandler}>Edit</button>
            <button onClick={deleteTodoHandler}>Delete</button>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default SingleTodo;
