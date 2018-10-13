var ExampleFunction = /** @class */ (function () {
    function ExampleFunction() {
        this.message = 'Wiadomość';
        //Funkcja anonimowa
        this.sendMessageWithUserData = function (firstname, age) { return console.log('Mam na imię: ' + firstname + ' i mam ' + age + ' lat'); };
        this.sendDefaultUserData = function () { return console.log('Mam na imię Ania i mam 27 lat'); };
        this.sendMessageWithArgumentType = function (firstname, age) {
            var returnText = firstname + ' łepecki, lat: ' + age;
            return returnText;
        };
    }
    ExampleFunction.prototype.showMessage = function () {
        console.log(this.message);
    };
    ExampleFunction.prototype.hello = function () {
        return 'hello nr 1';
    };
    ExampleFunction.prototype.sendMessage = function (message) {
        console.log(this.message + message);
    };
    ExampleFunction.prototype.sendMessageWithOptionUndefined = function (message, message2) {
        console.log(this.message + message + ' ' + message2);
    };
    ExampleFunction.prototype.sendMessageWithDefaultOption = function (message, message2) {
        if (message2 === void 0) { message2 = 'Kasia'; }
        console.log(this.message + message);
    };
    return ExampleFunction;
}());
var example = new ExampleFunction();
example.sendMessage(' Michał ');
example.sendMessageWithOptionUndefined('Ania');
example.sendMessageWithDefaultOption('Michał');
example.sendMessageWithUserData('Michał', 28);
example.sendDefaultUserData();
console.log(example.sendMessageWithArgumentType('Michał', 28));
