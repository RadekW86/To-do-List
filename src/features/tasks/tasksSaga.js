import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTaskTable, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTaks";
import { saveToLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak");
  }
}

function* saveToLocalStorageHandler() {
  const tasks = yield select(selectTaskTable);
  yield call(saveToLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveToLocalStorageHandler);
}
