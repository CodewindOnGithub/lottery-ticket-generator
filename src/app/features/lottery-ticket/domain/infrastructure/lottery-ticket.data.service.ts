import { Injectable } from "@angular/core";
import { LotteryTicketModel } from "../entities";

@Injectable({
  providedIn: "root",
})
export class LotteryTicketDataService {
  private store: { [key: number]: LotteryTicketModel } = {};

  getLotteryTickets(): LotteryTicketModel[] {
    return Object.values(this.store).slice();
  }

  addLotteryTicket(ticket: LotteryTicketModel) {
    this.store[ticket.id] = ticket;
  }

  getById(id: number): LotteryTicketModel | undefined {
    const ticket = this.store[id];
    return ticket;
  }
}
