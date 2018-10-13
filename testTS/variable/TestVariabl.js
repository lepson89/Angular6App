var TestVariabl = /** @class */ (function () {
    function TestVariabl() {
    }
    TestVariabl.prototype.varFunction = function () {
        var i = 30;
        for (var i = 0; i < 5; i++) {
            console.log("VAR PETLA " + i);
        }
        console.log("VAR POZA PETLA: " + i);
    };
    TestVariabl.prototype.letFunction = function () {
        var i = 50;
        for (var i_1 = 0; i_1 < 5; i_1++) {
            console.log("LET PETLA " + i_1);
        }
        console.log("LET POZA PETLA: " + i);
    };
    TestVariabl.prototype.constFunction = function () {
        var i = 50;
        console.log('STALA WARTOSC i ' + i);
    };
    return TestVariabl;
}());
var x = new TestVariabl();
x.constFunction();
x.letFunction();
x.varFunction();
