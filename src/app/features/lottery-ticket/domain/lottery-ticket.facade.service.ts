import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LotteryTicket } from "../models";
import { LotteryTicketModel } from "./entities";
import { LotteryTicketDataService } from "./infrastructure";
import {
  calcStatistics,
  toLotteryTicket
} from "./utils/domain.utils";

@Injectable({
  providedIn: "root",
})
export class LotteryTicketFacadeService {
  _tickets$ = new BehaviorSubject<LotteryTicket[]>([]);
  _activeTicket$ = new BehaviorSubject<LotteryTicket>({
    createdAt: new Date(),
    id: -1,
    tips: [],
    withBonusNumber: false,
    tipCount: 0,
  });

  _statistics$ = new BehaviorSubject<{ [key: number]: number }>({});
  statistics$ = this._statistics$.asObservable();

  tickets$ = this._tickets$.asObservable();
  activeTicket$ = this._activeTicket$.asObservable();

  constructor(private readonly dataService: LotteryTicketDataService) {}

  loadTickets() {
    const tickets = this.dataService.getLotteryTickets();
    const data: LotteryTicket[] = tickets.map(toLotteryTicket);
    const statistics = calcStatistics(tickets);
    this._tickets$.next(data);
    this._statistics$.next(statistics);
  }

  loadTicket(id: number) {
    const model = this.dataService.getById(id);
    if (model) {
      const data: LotteryTicket = toLotteryTicket(model);
      this._activeTicket$.next(data);
    }
  }

  addTicket(tipCount: number = 0, withBonusNumber = false) {
    const id = Date.now() + Math.random();
    const ticket = new LotteryTicketModel(id);
    ticket.setTipCount(tipCount);
    ticket.setWithBonusNumber(withBonusNumber);
    ticket.generateTips();
    this.dataService.addLotteryTicket(ticket);
    this.loadTickets();
  }
}
