import { useState, useEffect, useRef } from "react";

export const useTasks = () => {
  const [hideDone, setHideDone] = useState(false);
  const inputRef = useRef(null);
  const [taskTable, setTaskTable] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    inputRef.current.focus();
  }, [taskTable]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskTable));
  }, [taskTable]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTaskTable((taskTable) => taskTable.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTaskTable((taskTable) =>
      taskTable.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const markAllDone = () => {
    setTaskTable((taskTable) =>
      taskTable.map((task) => ({ ...task, done: true }))
    );
  };

  const addNewTask = (content) => {
    setTaskTable((taskTable) => [
      ...taskTable,
      {
        id: taskTable.length === 0 ? 1 : taskTable[taskTable.length - 1].id + 1,
        content,
        done: false,
      },
    ]);
  };

  return {
    taskTable,
    removeTask,
    toggleTaskDone,
    markAllDone,
    addNewTask,
    inputRef,
    hideDone,
    toggleHideDone,
  };
};
