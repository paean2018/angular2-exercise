import { Component, OnInit } from "@angular/core";
import { EventService } from "./event.service";

@Component({
  selector: "event-details",
  templateUrl: "./events-list.component.html",
  styles: [
    `
      th,
      td {
        font-size: 16px;
        padding: 5px 10px;
      }
    `,
  ],
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
