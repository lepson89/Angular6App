import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input()
  taskList: Array<string> = [];
  @Output()
  eventTask = new EventEmitter<string>();
  doneTaskList: Array<string> = [];

  add(event: string) {
    this.taskList.push(event);
    console.log(this.taskList);
  }

  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
  }

  done(task: string) {
    this.eventTask.emit(task);
    this.doneTaskList.push(task);
    this.remove(task);
  }

  getColor(): string {
    return this.taskList.length > 4 ? 'red' : 'green';
  }

}
