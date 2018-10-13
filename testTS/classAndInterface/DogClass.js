var DogClass = /** @class */ (function () {
    function DogClass() {
        this.name = 'Reksio';
        this.age = 12;
        this.color = "zielen";
    }
    DogClass.prototype.showDogInfo = function () {
        console.log(this.name + ' ' + this.age);
    };
    return DogClass;
}());
var y = new DogClass();
y.showDogInfo();
var dog = ({
    name: 'Azor',
    age: 12,
    color: 'szary'
});
console.log(dog);
var jsonDog = JSON.parse('{"name":"Asia","age":12,"color":"szary"}');
console.log(jsonDog);
