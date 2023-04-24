import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",

  initialState: {
    taskTable: loadFromLocalStorage(),
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
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.taskTable = tasks;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  markAllDone,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTaskTable = (state) => selectTasksState(state).taskTable;

export default tasksSlice.reducer;
