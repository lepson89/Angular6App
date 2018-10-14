import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  color = 'angular-test';
  maxLength = 15;
  textInput = 'Pusty tekst';
  isDisable = true;
  taskList = ['Zadanie1', 'Zadanie2', 'Zadanie3', 'Zadanie4'];

  constructor() {
    setTimeout(() => {
      this.isDisable = false;
    }, 1000);
  }

  changeColor() {
    this.isDisable = false;
    this.color = 'angular-test4';
    this.maxLength = 10;
  }

  onFocus() {
    this.color = 'angular-test4';
  }

  onClick(event) {
    console.log(event);
  }

  onMouseMove(event) {
    console.log('X: ' + event.clientX + ', yY: ' + event.clientY);
  }

  onPaste(event) {
    this.textInput = 'Nie wklejaj, wpisz!';
  }

  change() {
    this.isDisable = !this.isDisable;
  }

  taskIsDone(task: string = 'Zadanie bez nazwy') {
    console.log('Wykonane zadanie: ' + task);
  }
}


