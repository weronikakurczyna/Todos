import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {
  @Input() item;

  @Output()
  buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveTodo() {
    this.buttonClicked.emit(this.item);
  }

}
