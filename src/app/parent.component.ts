import { Component } from "@angular/core";

@Component({
  selector: "parent",
  template: `
    <div *ngIf="currentCounter">
      <h1>Congratulations!</h1>
      <h3>You set the parent's counter to: {{ currentCounter }}</h3>
    </div>
    <child #child> </child>
    <button class="btn btn-primary" (click)="child.stopTimer()">
      Stop Timer
    </button>
  `,
})
export class ParentComponent {
  currentCounter: number;
  handleClick(counter: number) {
    this.currentCounter = counter;
  }
}
