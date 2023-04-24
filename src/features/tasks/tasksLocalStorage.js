const localStorageKey = "tasks";

export const saveToLocalStorage = (tasks) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const loadFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
