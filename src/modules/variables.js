//eslint-disable-line
import LocalStorage from './localStorage.js';

export const taskSection = document.querySelector('.tasks');
export const userTask = document.querySelector('.add-task');
export const clearAllCompletedBtn = document.querySelector('.clearAll');
export const tasksArray = LocalStorage.get() || [];
