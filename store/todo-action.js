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
      const newTodo = { id: todoId, ...todo };
      dispatch(todoActions.addActiveTodo({ todo: newTodo }));
    } catch (err) {
      console.log(err);
    }
  };
};
