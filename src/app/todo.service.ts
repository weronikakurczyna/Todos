import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private serviceTodos = [];

  constructor(private storage: LocalStorageService) { }

  getTodos() {
    return of(this.storage.get());
  }

  addTodo(todo: string) {
    return this.storage.post(
      {
        label: todo,
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      }
    );
  }

  removeTodos() {
    return this.storage.destroyAll();
  }

}
