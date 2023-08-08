import { todoActions } from "./todo-slice";

const handleDispatch = (dispatch, action, payload) => {
  try {
    dispatch(action(payload));
  } catch (err) {
    console.log(err);
  }
};

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
      handleDispatch(dispatch, todoActions.addActiveTodo, {
        todo: newTodo,
      });
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
      const action = isActiveTodo
        ? todoActions.delActiveTodos
        : todoActions.delCompletedTodos;
      handleDispatch(dispatch, action, { _id: todoId });
    } catch (err) {
      console.log(err);
    }
  };
};

export const changeStatus = (todo) => {
  return async (dispatch) => {
    try {
      const currentStatus = todo.status;
      const actionType = currentStatus === "Active" ? "Completed" : "Active";
      const action =
        currentStatus === "Completed"
          ? todoActions.addActiveTodo
          : todoActions.addCompletedTodo;
      const oppositeAction =
        currentStatus === "Active"
          ? todoActions.delActiveTodos
          : todoActions.delCompletedTodos;
      handleDispatch(dispatch, oppositeAction, { _id: todo._id });
      handleDispatch(dispatch, action, { todo });
      const response = await fetch("/api/set-todostate", {
        method: "PUT",
        body: JSON.stringify({ todoId: todo._id, status: actionType }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        handleDispatch(
          dispatch,
          actionType === "Active"
            ? todoActions.delActiveTodos
            : todoActions.delCompletedTodos,
          { _id: todo._id }
        );
        handleDispatch(
          dispatch,
          actionType === "Active"
            ? todoActions.addCompletedTodo
            : todoActions.addActiveTodo,
          { todo }
        );
        throw new Error();
      }
    } catch (err) {
      console.log(err);
    }
  };
};
