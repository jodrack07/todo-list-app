//eslint-disable-line
import { userTask, todos } from './modules/variables.js';
import Actions from './modules/actions.js';

// populate the localStorage when the user press Enter
userTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && userTask.value) {
    e.preventDefault();
    Actions.addTask();
  }
});

// render all tasks
Actions.renderTask(todos);
