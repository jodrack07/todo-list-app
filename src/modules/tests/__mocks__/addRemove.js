import LocalStorage from '../../localStorage';

const update = false;
const todos = LocalStorage.get();

export const addTask = (task) => {
  if (!task) return null;
  if (!update) {
    todos.push(task);
    LocalStorage.save(todos);
  } else {
    LocalStorage.save(todos);
    update = false;
  }
};

// remove a task into the localstorage
export const removeTask = (taskId) => {
  const newTodos = todos.filter((todo, index) => todo.id !== taskId);
  // todos.splice(taskId, 1);
  return newTodos;
};
