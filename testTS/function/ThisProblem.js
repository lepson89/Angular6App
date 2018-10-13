var ThisProblem = /** @class */ (function () {
    function ThisProblem() {
        this.messager = 'helo';
    }
    ThisProblem.prototype.firstfunction = function () {
        return function () {
            console.log(this.messager);
        };
    };
    ThisProblem.prototype.secondFunction = function () {
        var _this = this;
        return function () {
            console.log(_this.messager);
        };
    };
    return ThisProblem;
}());
var example2 = new ThisProblem();
var fun1 = example2.firstfunction();
fun1();
var fun2 = example2.secondFunction();
fun2();
