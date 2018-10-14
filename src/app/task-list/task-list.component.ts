import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  newTask: string;
  @Input()
  taskList: Array<string> = [];
  @Output()
  eventTask = new EventEmitter<string>();
  doneTaskList: Array<string> = [];
  isDisabled = true;

  add() {
    this.taskList.push(this.newTask);
    this.newTask = '';
    console.log(this.taskList);
    this.changeButton();
  }

  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
  }

  done(task: string) {
    this.eventTask.emit(task);
    this.doneTaskList.push(task);
    this.remove(task);
  }

  changeButton() {
    this.isDisabled = this.newTask.length === 0 ? true : false;
  }

}
