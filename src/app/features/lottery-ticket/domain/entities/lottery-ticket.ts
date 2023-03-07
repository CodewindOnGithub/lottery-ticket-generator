import { generateRandomNumber } from "../utils/domain.utils";

export interface Tip {
  fields: number[];
  bonusNumber: number | undefined;
}

export interface Tips {
  [key: string]: Tip;
}

export class LotteryTicketModel {
  private tips: Tips;
  private tipCount: number;
  private withBonusNumber: boolean;

  readonly id: number;
  readonly createdAt: Date;

  constructor(id: number) {
    this.id = id;
    this.tips = {};
    this.tipCount = 0;
    this.createdAt = new Date();
    this.withBonusNumber = false;
  }

  getId(): number {
    return this.id;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getTipCount(): number {
    return this.tipCount;
  }

  setTipCount(value: number): void {
    this.tipCount = value;
  }

  setWithBonusNumber(value: boolean) {
    this.withBonusNumber = value;
  }

  getWithBonusNumber(): boolean {
    return this.withBonusNumber;
  }

  getTips(): Tips {
    return this.tips;
  }

  generateTips(): void {
    for (let index = 0; index < this.tipCount; index++) {

      const arr: number[] = [];
      
      while (true) {
        const num = generateRandomNumber();

        if (!arr.includes(num)) {
          arr.push(num);
        }

        if (arr.length === 6) {
          break;
        }
      }

      arr.sort((a, b) => a - b);

      const bonusNumber = this.withBonusNumber
        ? generateRandomNumber(9, 0)
        : undefined;

      const tip: Tip = {
        fields: [...arr],
        bonusNumber,
      };
      this.tips[index] = tip;
    }
  }
}
