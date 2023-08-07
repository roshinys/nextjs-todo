import React, { useState } from "react";
import Todos from "./Todos";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { todoActions } from "@/store/todo-slice";

function TodosState() {
  const activeTodos = useSelector((state) => state.todos.activeTodos);
  const completedTodos = useSelector((state) => state.todos.completedTodos);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log(source, destination);
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let add,
      active = activeTodos,
      complete = completedTodos;
    console.log(active, complete);
    if (source.droppableId === "Todos") {
      add = active[source.index];
      dispatch(todoActions.delActiveTodos({ id: add?.id }));
      dispatch(todoActions.addCompletedTodo({ todo: add }));
    } else {
      add = complete[source.index];
      dispatch(todoActions.delCompletedTodos({ id: add?.id }));
      dispatch(todoActions.addActiveTodo({ todo: add }));
    }

    // if (destination.droppableId === "Todos") {
    //   // active.splice(destination.index, 0, add);
    // } else {
    //   // complete.splice(destination.index, 0, add);
    // }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Todos todos={activeTodos} label="Todos" />
        <Todos todos={completedTodos} label="Completed" />
      </DragDropContext>
    </>
  );
}

export default TodosState;
