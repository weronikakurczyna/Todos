import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = [];

  constructor(private todoService: TodoService) {
    console.log(todoService.getTodos());
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      console.log(todos);
      this.todos = todos;
    });
  }

  onAdd(text: string) {
    if (text && text !== ' ') {
      this.todos = this.todoService.addTodo(text);
      console.log(this.todos);
    }
  }

  onClearTodos() {
    this.todos = [...this.todoService.removeTodos()];
  }

}
