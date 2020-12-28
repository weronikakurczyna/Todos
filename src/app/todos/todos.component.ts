import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = [];

  itemFromChild;

  constructor(private todoService: TodoService) {
    console.log(todoService.getTodos());
  }

  ngOnInit() {
    this.refreshTodos();
    setInterval(() => this.refreshTodos(), 10000);
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

  onRemoveTodo(item) {
    this.itemFromChild = item;
    this.todos = this.todoService.removeTodo();
  }

  private refreshTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      console.log(todos);
      this.todos = todos;
    });
  }

}
