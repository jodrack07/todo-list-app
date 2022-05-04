//eslint-disable-line
import { userTask, todos } from './modules/variables.js';
import Actions from './modules/actions.js';
import './style.css';

// populate the localStorage when the user press Enter
userTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && userTask.value) {
    e.preventDefault();
    Actions.addTask();
  }
});

// render all tasks/todos
Actions.renderTask(todos);
// remove a task/todo
Actions.removeTask();
// toggle the completed status of a task/todo
Actions.toggleCompleted();
// delete all completed task
Actions.deleteAllCompleted();
