import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",

  initialState: {
    taskTable: JSON.parse(localStorage.getItem("tasks")) || [],
    hideDone: false,
  },

  reducers: {
    addTask: ({ taskTable }, { payload: task }) => {
      taskTable.unshift(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ taskTable }, { payload: taskId }) => {
      const index = taskTable.findIndex(({ id }) => id === taskId);
      taskTable[index].done = !taskTable[index].done;
    },
    removeTask: ({ taskTable }, { payload: taskId }) => {
      const index = taskTable.findIndex(({ id }) => id === taskId);
      taskTable.splice(index, 1);
    },
    markAllDone: ({ taskTable }) => {
      for (const task of taskTable) {
        task.done = true;
      }
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  markAllDone,
} = tasksSlice.actions;
export const selectTasksState = (state) => state.tasks;
export default tasksSlice.reducer;
