import { Injectable } from '@angular/core';

const storageName = 'todo_list';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  private storedTodo;

  constructor() {
    this.get();
  }

  get() {
    this.storedTodo = (localStorage.getItem(storageName) != null) ?
      JSON.parse(localStorage.getItem(storageName)) :
      [];
    /*
        if (localStorage.getItem(storageName) != null) {
          this.storedTodo = JSON.parse(localStorage.getItem(storageName));
        } else {
          this.storedTodo = [];
        }
    */
    return [...this.storedTodo];
  }

  post(item) {
    this.storedTodo.push(item);
    return this.update();
  }

  destroyAll() {
    this.storedTodo.splice(0, this.storedTodo.length);
    return this.update();
  }

  destroy(item) {
    this.storedTodo.splice(this.findItemIndex(item), 1);
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.storedTodo));
    return this.get();
  }

  private findItemIndex(item) {
    return this.storedTodo.indexOf(item);
  }
}
