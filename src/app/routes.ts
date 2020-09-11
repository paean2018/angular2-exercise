import { Routes } from "@angular/router";

import { EventsListComponent } from "./events-list.component";
import { EventDetailsComponent } from "./event-details.component";
import { EventRouterActivator } from "./event-router-activator.service";

export const appRoutes: Routes = [
  {
    path: "events",
    component: EventsListComponent,
  },
  {
    path: "events/:eventId",
    component: EventDetailsComponent,
    canActivate: [EventRouterActivator],
    canDeactivate: ["canDeactivateViewEvent"],
  },
  { path: "", redirectTo: "/events", pathMatch: "full" },
];
