import React from "react";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

function TodoList({ droppableId, todos, type }) {
  return (
    <Droppable droppableId={droppableId} type={type}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {todos?.map((todo, index) => {
            return (
              <SingleTodo
                todo={todo}
                key={todo?._id}
                index={index}
                droppableId={droppableId}
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
