import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventService } from "./event.service";

@Injectable()
export class EventRouterActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params.eventId);
    if (!eventExist) {
      return this.router.navigate(["events"]);
    }
    return eventExist;
  }
}
