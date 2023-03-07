import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { tap } from "rxjs/operators";
import { LotteryTicketFacadeService } from "../domain";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent {
  routeParamChange$ = this.activatedRoute.params.pipe(
    tap(({ id }) => this.facade.loadTicket(id))
  );

  constructor(
    readonly facade: LotteryTicketFacadeService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
}
