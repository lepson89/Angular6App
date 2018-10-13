class ExampleFunction {
  message: string = 'Wiadomość';


  showMessage(): void {
    console.log(this.message);
  }

  hello(): string {
    return 'hello nr 1';
  }

  sendMessage(message: string): void{
    console.log (this.message + message);
  }
  sendMessageWithOptionUndefined(message: string, message2?: string): void{
    console.log (this.message + message + ' '+ message2);
  }
  sendMessageWithDefaultOption(message: string, message2='Kasia'): void{
    console.log (this.message + message);
  }
  //Funkcja anonimowa
  sendMessageWithUserData = (firstname, age) => console.log('Mam na imię: '+firstname+' i mam ' + age + ' lat');

  sendDefaultUserData = () => console.log('Mam na imię Ania i mam 27 lat');

  sendMessageWithArgumentType = (firstname: string, age: number): string => {
    var returnText = firstname + ' łepecki, lat: '+age;
    return returnText;
  }

}
var example = new ExampleFunction();
example.sendMessage(' Michał ');
example.sendMessageWithOptionUndefined('Ania');
example.sendMessageWithDefaultOption('Michał')
example.sendMessageWithUserData('Michał', 28);
example.sendDefaultUserData();
console.log(example.sendMessageWithArgumentType('Michał', 28));
