export interface LotteryTicket {
  id: number;
  createdAt: Date;
  tips: {
    fields: number[];
    bonusNumber: number | undefined;
  }[];
  withBonusNumber: boolean;
  tipCount: number;
}
