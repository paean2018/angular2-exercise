import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events-list.component";
import { EventService } from "./event.service";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, EventsListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
