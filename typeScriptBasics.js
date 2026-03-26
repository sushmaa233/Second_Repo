var typeScriptBasics = /** @class */ (function () {
    function typeScriptBasics() {
    }
    typeScriptBasics.prototype.greet = function () {
        console.log("Hello" + this.text);
    };
    return typeScriptBasics;
}());
var tsc = new typeScriptBasics();
tsc.text = "TypeScript";
tsc.greet();
