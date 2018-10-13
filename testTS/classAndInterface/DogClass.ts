class DogClass {

  name: string = 'Reksio';
  age: number = 12;
  color: String = "zielen"

  constructor(){
  }

  showDogInfo (){
    console.log(this.name+' '+this.age);
  }
}

let y = new DogClass();
y.showDogInfo()



interface Dog {
  name: string;
  age: number;
  color: string;
  date?: Date;
}

let dog: Dog = ({
  name: 'Azor',
  age: 12,
  color: 'szary',
})


console.log(dog);

let jsonDog: Dog = JSON.parse('{"name":"Asia","age":12,"color":"szary"}');

console.log(jsonDog)
