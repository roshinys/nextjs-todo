import React from "react";
import Todos from "./Todos";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { todoActions } from "@/store/todo-slice";
import { useSelector } from "react-redux";

function TodosState() {
  const activeTodos = useSelector((state) => state.todos.activeTodos);
  const completedTodos = useSelector((state) => state.todos.completedTodos);
  console.log("hope");
  console.log(activeTodos);
  console.log(completedTodos);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log(result);
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
    if (source.droppableId === "Active") {
      add = active[source.index];
      dispatch(todoActions.delActiveTodos({ _id: add?._id }));
      dispatch(todoActions.addCompletedTodo({ todo: add }));
    } else {
      add = complete[source.index];
      dispatch(todoActions.delCompletedTodos({ _id: add?._id }));
      dispatch(todoActions.addActiveTodo({ todo: add }));
    }
    console.log(source, destination);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Todos todos={activeTodos} droppableId="Active" type="Todos" />
        <Todos todos={completedTodos} droppableId="Completed" type="Todos" />
      </DragDropContext>
    </>
  );
}

export default TodosState;
