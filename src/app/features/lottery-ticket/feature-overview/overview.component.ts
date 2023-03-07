import { animate, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LotteryTicketFacadeService } from "../domain";
import { LotteryTicket } from "./../models/lottery-ticket";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(-100%)" }),
        animate(
          "750ms ease-in-out",
          style({ opacity: 1, transform: "translateX(0)" })
        ),
      ]),
    ]),
  ],
})
export class OverviewComponent {
  formGroup = new FormGroup({
    tipCount: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.min(0), Validators.max(12)],
    }),
    withBonusNumber: new FormControl(false, { nonNullable: true }),
  });

  trackById = (_index: number, item: LotteryTicket): number => item.id;

  constructor(
    readonly facade: LotteryTicketFacadeService,
    readonly router: Router
  ) {}

  onSubmit() {
    if (this.formGroup.valid) {
      const { tipCount, withBonusNumber } = this.formGroup.value;
      this.facade.addTicket(tipCount, withBonusNumber);
    }
  }
}
