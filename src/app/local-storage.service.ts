import { Injectable } from '@angular/core';

const storageName = 'todo_list';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  private storedTodo;

  constructor() {
    this.storedTodo = JSON.parse(localStorage.getItem(storageName));
  }

  get() {
    this.storedTodo = JSON.parse(localStorage.getItem(storageName));
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

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.storedTodo));
    return this.get();
  }

}
