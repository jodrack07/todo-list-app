import LocalStorage from '../../localStorage.js';

export const toggleStatus = (id) => {
  const todos = LocalStorage.get();
  todos[id].completed = !todos[id].completed;
  LocalStorage.save(todos);
  return todos;
};

export const editTaskDescription = (id, text) => {
  const todos = LocalStorage.get();
  todos[id].description = text;
  LocalStorage.save(todos);
  return todos;
};

export const deleteAllCompleted = (oldTodos) => oldTodos.filter((todo) => todo.completed === false);
