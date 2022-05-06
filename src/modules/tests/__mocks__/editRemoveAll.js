import LocalStorage from '../../localStorage';

export const toggleStatus = (id) => {
  const todos = LocalStorage.get();
  todos[id].completed = !todos[id].completed;
  LocalStorage.save(todos);
  return todos;
};

export const deleteAllCompleted = (oldTodos) => {
  return oldTodos.filter((todo) => todo.completed === false);
};

