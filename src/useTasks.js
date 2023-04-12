import { useState, useEffect } from "react";

export const useTasks = () => {
  const [taskTable, setTaskTable] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskTable));
  }, [taskTable]);

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

  return { taskTable, removeTask, toggleTaskDone, markAllDone, addNewTask };
};
