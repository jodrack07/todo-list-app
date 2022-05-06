/**
 * @jest-environment jsdom
 */
import LocalStorage from '../localStorage.js';
import { addTask } from './__mocks__/addRemove.js';
import { toggleStatus, deleteAllCompleted } from './__mocks__/editRemoveAll.js';

describe('Add element(s) into the localstorage', () => {
  it('should return the exact number of elements inside the localstorage', () => {
    addTask({ id: 0, description: 'task 1', completed: false });
    addTask({ id: 1, description: 'task 2', completed: false });
    addTask({ id: 2, description: 'task 3', completed: false });
    const todos = LocalStorage.get();
    expect(todos.length).toBe(3);
  });
});
describe('Edit and Remove All', () => {
  it('should set the completed status at index 1 to true', () => {
    const newTodos = toggleStatus(1);
    expect(newTodos[1].completed).toBe(true);
  });
  it('should keep the completed status to false at index 0', () => {
    const todos = LocalStorage.get();
    expect(todos[0].completed).toBe(false);
  });
  it('should delete all completed todos', () => {
    const todos = LocalStorage.get();
    const newTodos = deleteAllCompleted(todos);
    expect(newTodos.length).toBe(2);
  });
});
