import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
