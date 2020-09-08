import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "child",
  template: `
    <div>
      <h1>Child Component: {{ counter }}</h1>
      <button class="btn btn-primary" (click)="handleClick()">Click me</button>
    </div>
  `,
})
export class ChildComponent {
  @Output() eventClick = new EventEmitter();

  counter: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  handleClick() {
    this.eventClick.emit(this.counter);
  }
}
