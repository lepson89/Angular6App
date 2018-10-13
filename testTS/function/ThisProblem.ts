class ThisProblem {
  messager: string = 'helo';

  firstfunction(){
    return function (){
      console.log(this.messager);
    }
  }

  secondFunction(){
    return () => {
      console.log(this.messager)
    }
  }
}
var example2 = new ThisProblem();
var fun1 = example2.firstfunction();
fun1();
var fun2 = example2.secondFunction();
fun2();
