import { Component, Input } from "@angular/core";
import { LotteryTicket } from "../../models/lottery-ticket";

@Component({
  selector: "app-ticket",
  templateUrl: `./ticket.component.html`,
  styleUrls: ["./ticket.component.scss"],
})
export class TicketComponent {
  @Input() ticket: LotteryTicket = {
    createdAt: new Date(),
    id: -1,
    tips: [],
    tipCount: 0,
    withBonusNumber: false,
  };
}
