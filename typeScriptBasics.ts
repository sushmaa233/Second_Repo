class typeScriptBasics {
    text!:string;
    constructor() {

    }
    greet() {
        console.log("Hello "+ this.text);
    }
}
let tsc = new typeScriptBasics();
tsc.text = "TypeScript";
tsc.greet();