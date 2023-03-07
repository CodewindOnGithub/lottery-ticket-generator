import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from './features/lottery-ticket/feature-details/details.component';
import { OverviewComponent } from "./features/lottery-ticket/feature-overview/overview.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "overview",
  },
  {
    path: "overview",
    component: OverviewComponent,
  },
  {
    path: ':id/details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
