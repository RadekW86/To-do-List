import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",

  initialState: {
    taskTable: JSON.parse(localStorage.getItem("tasks")) || [],
    hideDone: false,
  },

  reducers: {
    addTask: ({ taskTable }, { payload }) => {
      taskTable.unshift(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ taskTable }, { payload }) => {
      const index = taskTable.findIndex(({ id }) => id === payload);
      taskTable[index].done = !taskTable[index].done;
    },
    removeTask: ({ taskTable }, { payload }) => {
      const index = taskTable.findIndex(({ id }) => id === payload);
      taskTable.splice(index, 1);
    },
    markAllDone: ({ taskTable }) => {
      for (const element of taskTable) {
        element.done = true;
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
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
