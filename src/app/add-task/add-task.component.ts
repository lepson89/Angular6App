import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  newTask: string;
  @Output()
  evenTask = new EventEmitter<string>()

  constructor() { }

  addTask() {
    this.evenTask.emit(this.newTask);
    this.newTask ='';
  }

}
