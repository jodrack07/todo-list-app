const taskInput = document.querySelector('.add-input');
// get data from the localstorage
const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

export const deleteTask = (id) => {
  // remove one todo from the specified id
  todos.splice(id, 1);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  //   showTodos();
  window.location.reload();
};

export const updateStatus = (selectedTodo) => {
  // get tje paragraph
  const taskDescription = selectedTodo.parentElement.lastElementChild;
  if (selectedTodo.checked) {
    taskDescription.classList.add('completed');
    // update the status of the checked todo
    todos[selectedTodo.id].completed = true;
  } else {
    taskDescription.classList.remove('completed');
    // update the status of the checked todo
    todos[selectedTodo.id].completed = false;
  }
  // save changes into the local storage
  localStorage.setItem('todo-list', JSON.stringify(todos));
  window.location.reload();
};
