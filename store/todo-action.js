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

export const changeStatus = (todo) => {
  return async (dispatch) => {
    try {
      const currentStatus = todo.status;
      // not the best way to do but to make it smoother i adjusted it
      if (currentStatus === "Active") {
        dispatch(todoActions.delActiveTodos({ _id: todo._id }));
        dispatch(todoActions.addCompletedTodo({ todo }));
      } else {
        dispatch(todoActions.delCompletedTodos({ _id: todo._id }));
        dispatch(todoActions.addActiveTodo({ todo }));
      }
      const status = todo.status === "Active" ? "Completed" : "Active";
      const response = await fetch("/api/set-todostate", {
        method: "PUT",
        body: JSON.stringify({ todoId: todo._id, status }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        // adjust back the dispatch actions which donot wait
        throw new Error();
      }
    } catch (err) {
      console.log(err);
    }
  };
};
