import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";
import { LotteryTicket } from "../../models";

@Pipe({
  name: "ticketLabel",
})
export class TicketLabelPipe implements PipeTransform {
  datePipe = new DatePipe("de-DE");

  transform(ticket: LotteryTicket): unknown {
    const date = this.datePipe.transform(ticket.createdAt);
    return `Lottoschein vom  ${date}  -  ${ticket.tipCount}  Felder /
    Superzahl:  ${ticket.withBonusNumber ? "Ja" : "Nein"} `;
  }
}
