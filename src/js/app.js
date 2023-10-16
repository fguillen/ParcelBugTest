import { Class1 } from "./class_1.js";

console.log("Loading App");

class App {
  constructor() {
    this.class_1 = new Class1();
  }
}

new App();
