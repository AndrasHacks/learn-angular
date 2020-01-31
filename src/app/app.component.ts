import { Component } from "@angular/core";

function log(target, name, descriptor) {
  console.log("Target: ", target, "Name: ", name, "Descriptor: ", descriptor);
  const original = descriptor.value;
  descriptor.value = () => {
    console.log("This function was hacked!");
  };
  return descriptor;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ng-intro";

  constructor() {
    this.aSimpleMethod();
  }

  @log
  aSimpleMethod() {
    console.log("This is a decorated Typescript function");
  }
}
