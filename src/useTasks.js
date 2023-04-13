import { useState, useEffect, useRef } from "react";

export const useTasks = () => {
  const [hideDone, setHideDone] = useState(false);
  const [taskTable, setTaskTable] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskTable));
  }, [taskTable]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTaskTable((previousTaskTable) =>
      previousTaskTable.filter((task) => task.id !== id)
    );
  };

  const toggleTaskDone = (id) => {
    setTaskTable((previousTaskTable) =>
      previousTaskTable.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const markAllDone = () => {
    setTaskTable((previousTaskTable) =>
      previousTaskTable.map((task) => ({ ...task, done: true }))
    );
  };

  const addNewTask = (content) => {
    setTaskTable((previousTaskTable) => [
      ...previousTaskTable,
      {
        id:
          previousTaskTable.length === 0
            ? 1
            : previousTaskTable[previousTaskTable.length - 1].id + 1,
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
    hideDone,
    toggleHideDone,
  };
};
