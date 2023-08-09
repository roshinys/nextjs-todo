import React, { useEffect, useState } from "react";
import styles from "./AddTodo.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todo-action";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { modalActions } from "@/store/modal-slice";

const AddTodo = () => {
  const { activeTodos, completedTodos } = useSelector((state) => state.todos);
  const totalTodosLen = activeTodos.length + completedTodos.length;
  const dispatch = useDispatch();
  const { isModalOpen, taskName } = useSelector((state) => state.modal);
  const [task, setTask] = useState("");
  useEffect(() => {
    setTask(taskName);
  }, [taskName]);

  const handleModalOpen = () => {
    dispatch(modalActions.handleOpenModal());
  };

  const handleModalClose = () => {
    dispatch(modalActions.handleCloseModal());
    setTask("");
  };

  const handleTaskNameChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (totalTodosLen === 5) {
      alert("You can only add 5 todos at max try deleting some");
      return;
    }
    dispatch(
      addTodo({
        todo: task,
        status: "Active",
      })
    );
    handleModalClose();
  };

  return (
    <div className={styles.addTodo}>
      <IconButton onClick={handleModalOpen} className={styles.addButton}>
        <AddIcon />
        <span>Add Todo</span>
      </IconButton>
      {isModalOpen && (
        <div className={styles["modal-overlay"]}>
          <div className={styles["modal-content"]}>
            <h2>Add Todo</h2>
            <form onSubmit={handleAddTodo}>
              <label>
                Task Name:
                <input
                  type="text"
                  value={task}
                  onChange={handleTaskNameChange}
                />
              </label>
              <div className="modal-actions">
                <IconButton type="submit" className={styles.addButton}>
                  <AddIcon />
                </IconButton>
                <IconButton
                  type="button"
                  onClick={handleModalClose}
                  className={styles.addButton}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
