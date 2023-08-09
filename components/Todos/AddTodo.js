import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todo-action";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddTodo = () => {
  const { activeTodos, completedTodos } = useSelector((state) => state.todos);
  const totalTodosLen = activeTodos.length + completedTodos.length;
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskName, setTaskName] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTaskName("");
  };

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (totalTodosLen === 5) {
      alert("You can only add 10 todos at max try deleting some");
      return;
    }
    dispatch(
      addTodo({
        todo: taskName,
        status: "Active",
      })
    );
    handleModalClose();
  };

  return (
    <div>
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
                  value={taskName}
                  onChange={handleTaskNameChange}
                />
              </label>
              <div className="modal-actions">
                <button type="submit">Add</button>
                <button type="button" onClick={handleModalClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
