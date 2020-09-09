import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events-list.component";
import { EventService } from "./event.service";

@NgModule({
  declarations: [AppComponent, EventsListComponent],
  imports: [BrowserModule],
  providers: [EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
