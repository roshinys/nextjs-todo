import React from "react";
import Todos from "./Todos";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { todoActions } from "@/store/todo-slice";
import { useSelector } from "react-redux";
import { changeStatus } from "@/store/todo-action";

function TodosState() {
  const activeTodos = useSelector((state) => state.todos.activeTodos);
  const completedTodos = useSelector((state) => state.todos.completedTodos);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      //We can manipulate the index of arrays in same todos but will do that later
      return;
    }
    let add,
      active = activeTodos,
      complete = completedTodos;
    let status = null;
    if (source.droppableId === "Active") {
      add = active[source.index];
    } else {
      add = complete[source.index];
    }
    console.log(add);
    dispatch(changeStatus(add));
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Todos todos={activeTodos} droppableId="Active" type="Todos" />
        <Todos todos={completedTodos} droppableId="Completed" type="Todos" />
      </DragDropContext>
    </div>
  );
}

export default TodosState;
