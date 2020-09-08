import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EventComponent } from "./event-app.component";
import { EventAddressComponent } from "./event-address.component";

@NgModule({
  declarations: [AppComponent, EventComponent, EventAddressComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
