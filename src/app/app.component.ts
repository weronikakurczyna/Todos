import { Component } from '@angular/core';
import { TodoService } from './todo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [];
  done = [];

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
