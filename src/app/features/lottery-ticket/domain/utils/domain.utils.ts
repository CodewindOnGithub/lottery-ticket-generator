import { LotteryTicket } from "../../models/lottery-ticket";
import { LotteryTicketModel, Tip } from "./../entities/lottery-ticket";

export const toLotteryTicket = (model: LotteryTicketModel): LotteryTicket => ({
  createdAt: model.getCreatedAt(),
  id: model.getId(),
  tipCount: model.getTipCount(),
  withBonusNumber: model.getWithBonusNumber(),
  tips: Object.values(model.getTips()),
});

export const generateRandomNumber = (max = 49, min = 1): number =>
  Math.floor(Math.random() * (max - min)) + min;

export const calcStatistics = (
  model: LotteryTicketModel[]
): { [key: number]: number } => {
  const data = model
    .map((m) => Object.values<Tip>(m.getTips()))
    .flat()
    .map((tip) => tip.fields)
    .flat();

  const nums = [...new Set(data)];
  const result: { [key: number]: number } = {};
  nums.sort((a, b) => a - b);
  nums.forEach((n) => {
    result[n] = Math.floor((getOccurrence(data, n) / data.length) * 100);
  });

  return result;
};

const getOccurrence = (array: number[], value: number) => {
  var count = 0;
  array.forEach((v) => v === value && count++);
  return count;
};
