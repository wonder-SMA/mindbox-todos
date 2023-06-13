import { makeAutoObservable } from 'mobx';

export default class TodosStore {
  _filterValue = 'all';
  _allTodos = [];
  _completedTodos = [];

  constructor() {
    makeAutoObservable(this);
  }

  get todos() {
    switch (this.filterValue) {
      case 'all':
        return this.allTodos;
      case 'active':
        return this.activeTodos;
      case 'completed':
        return this.completedTodos;
      default:
        return '';
    }
  }

  get filterValue() {
    return this._filterValue;
  }

  setFilterValue(value) {
    this._filterValue = value;
  }

  get allTodos() {
    return this._allTodos;
  }

  setAllTodos(todo) {
    if (!this._allTodos.includes(todo)) {
      this._allTodos = [...this._allTodos, todo];
    }
  }

  get activeTodos() {
    return this._allTodos.filter(todo => !this._completedTodos.includes(todo));
  }

  get completedTodos() {
    return this._completedTodos;
  }

  setCompletedTodos(todo) {
    if (this.completedTodos.includes(todo)) {
      this._completedTodos = this.completedTodos.filter(completedTodo => !(completedTodo === todo));
    } else {
      this._completedTodos = [...this._completedTodos, todo];
    }
  }

  clearCompletedTodos() {
    this._allTodos = [...this.activeTodos];
    this._completedTodos = [];
  }
}
