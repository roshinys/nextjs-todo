import { todoActions } from "./todo-slice";

export const addTodo = (todo) => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/add-todo", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      const todoId = data?.todoItem?.insertedId;
      const newTodo = { _id: todoId, ...todo };
      dispatch(todoActions.addActiveTodo({ todo: newTodo }));
    } catch (err) {
      console.log(err);
    }
  };
};

export const delTodo = (todoId, isActiveTodo) => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/del-todo", {
        method: "POST",
        body: JSON.stringify({ todoId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error();
      }
      if (isActiveTodo) {
        dispatch(todoActions.delActiveTodos({ _id: todoId }));
      } else {
        dispatch(todoActions.delCompletedTodos({ _id: todoId }));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
