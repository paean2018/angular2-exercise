import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "child",
  template: `
    <div *ngIf="showMsg">
      <h1>Congratulations</h1>
      <h2>You stopped the child component's counter!</h2>
    </div>
    <h1 class="color-red">Child Component: {{ counter }}</h1>
  `,
  styles: [
    `
      .color-red {
        color: red;
      }
    `,
  ],
})
export class ChildComponent {
  @Output() eventClick = new EventEmitter();
  private running: any;
  private showMsg = false;
  counter: number = 0;

  ngOnInit() {
    this.running = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.running);
    this.showMsg = true;
  }
}
