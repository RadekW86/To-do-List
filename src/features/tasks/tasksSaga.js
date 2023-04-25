import { call, put, takeEvery, select, debounce } from "redux-saga/effects";
import {
  fetchExampleTasks,
  selectTaskTable,
  setTasks,
  setTasksFail,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTaks";
import { saveToLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak");
    yield put(setTasksFail());
  }
}

function* saveToLocalStorageHandler() {
  const tasks = yield select(selectTaskTable);
  yield call(saveToLocalStorage, tasks);
}

export function* tasksSaga() {
  yield debounce(1000, fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveToLocalStorageHandler);
}
