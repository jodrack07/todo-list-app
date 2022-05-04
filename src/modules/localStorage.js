export default class LocalStorage {
  static save = (data) => {
    localStorage.setItem('TODO-LIST', JSON.stringify(data));
  };

  static get = () => {
    return JSON.parse(localStorage.getItem('TODO-LIST')) || [];
  };
}
