import React from "react";
import styles from "./SingleTodo.module.css";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { delTodo } from "@/store/todo-action";

function SingleTodo({ index, id, task, droppableId }) {
  console.log("draggableId");
  console.log(id);
  const dispatch = useDispatch();
  const isActiveTodo = droppableId === "Active" ? true : false;
  const deleteTodoHandler = () => {
    dispatch(delTodo(id, isActiveTodo));
  };

  const editTodoHandler = () => {
    console.log("will do it later");
  };

  return (
    <Draggable draggableId={id} index={index} type="Todos">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.singleTodo}
        >
          <div>
            <h1>{task}</h1>
          </div>
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
