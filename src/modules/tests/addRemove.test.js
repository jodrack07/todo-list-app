/**
 * @jest-environment jsdom
 */
import LocalStorage from '../localStorage.js';
import { addTask, removeTask } from './__mocks__/addRemove.js';

describe('Add and Remove element into the localstorage', () => {
  it('should return null is no task specified', () => {
    const result = addTask('');
    expect(result).toBeNull();
  });

  it('should return the exact number of elements inside the localstorage', () => {
    addTask({ id: 1, description: 'task 1' });
    addTask({ id: 2, description: 'task 2' });
    addTask({ id: 3, description: 'task 3' });
    addTask({ id: 4, description: 'task 4' });

    const todos = LocalStorage.get();
    expect(todos.length).toBe(4);
  });

  it('Should remove an element(s) into the localstorage', () => {
    const newArray1 = removeTask(1);
    LocalStorage.save(newArray1);
    const newArray2 = removeTask(2);
    LocalStorage.save(newArray2);
    const todos = LocalStorage.get();
    expect(todos.length).toBe(3);
  });
});
