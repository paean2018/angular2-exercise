import { NgModule } from "@angular/core";
import { EventsListComponent } from "./events-list.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: EventsListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
