import { Component } from "@angular/core";

function sampleDecorator(target, name, descriptor) {
  console.log("Target: ", target, "Name: ", name, "Descriptor: ", descriptor);
  const original = descriptor.value;
  descriptor.value = () => {
    console.log("This function was hacked!");
  };
  return descriptor;
}

function logCall(target: object, name: string, descriptor: any) {
  const original: Function = descriptor.value;
  descriptor.value = function(...args) {
    console.log(
      `Log: Function '${name}' was called with `,
      args,
      " arguments."
    );
    const reuslt = original.apply(this, args);
    console.log("Log: Result is ", reuslt);
    return reuslt;
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
    console.log("Result from constructor: ", this.square(5));
  }

  @logCall
  square(a: number) {
    return a * a;
  }

  @sampleDecorator
  aSimpleMethod() {
    console.log("This is a decorated Typescript function");
  }
}
