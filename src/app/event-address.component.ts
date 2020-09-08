import { Component, Input } from "@angular/core";

@Component({
  selector: "event-address",
  template: "<div> {{address}}</div>",
})
export class EventAddressComponent {
  @Input() address: string;
}
