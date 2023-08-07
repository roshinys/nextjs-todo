import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { useDispatch } from "react-redux";
import { todoActions } from "@/store/todo-slice";

const AddTodo = () => {
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
    dispatch(todoActions.addTodo({ taskName }));
    handleModalClose();
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Add Todo</button>
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
