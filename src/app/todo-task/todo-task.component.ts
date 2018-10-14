import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
  @Input()
  taskList: Array<string> = [];
  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  emitRemove = new EventEmitter<string>();


  constructor() { }

  done(task: string) {
    this.emitDone.emit(task);
  }

  remove(task: string){
    this.emitRemove.emit(task)
  }
}
