import LocalStorage from '../../localStorage.js';

let update = false;
const todos = LocalStorage.get();

export const addTask = (task) => {
  if (!task) return null;
  if (!update) {
    todos.push(task);
  } else {
    update = false;
  }
  return LocalStorage.save(todos);
};

// remove a task into the localstorage
export const removeTask = (taskId) => {
  const newTodos = todos.filter((todo, index) => todo.id !== taskId);
  // todos.splice(taskId, 1);
  return newTodos;
};
