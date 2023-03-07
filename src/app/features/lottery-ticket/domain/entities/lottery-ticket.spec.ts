import { LotteryTicketModel, Tip } from "./lottery-ticket";

describe("LotteryTicket", () => {
  let testUnit: LotteryTicketModel;

  beforeEach(() => {
    testUnit = new LotteryTicketModel(0);
  });
  it("should create an instance", () => {
    expect(testUnit).toBeTruthy();
  });

  describe("generate ticket", () => {
    let result: Tip;

    beforeEach(() => {
      testUnit.setTipCount(1);
      testUnit.generateTips();
      result = testUnit.getTips()[0];
    });

    it("should generate ticket with 6 numbers", () => {
      expect(result.fields.length).toBe(6);
    });

    it("should only have numbers greater than 0", () => {
      const hasNumberOutOfRange = !!result.fields.find((num) => num < 0);
      expect(hasNumberOutOfRange).toBe(false);
    });

    it("should only have numbers less or equal than 49", () => {
      const hasNumberOutOfRange = !!result.fields.find((num) => num > 49);
      expect(hasNumberOutOfRange).toBe(false);
    });

    it("should generate multiple tips", () => {
      testUnit.setTipCount(3);
      testUnit.generateTips();
      const result = testUnit.getTips();
      expect(Object.keys(result)).toHaveLength(3);
    });

    it("should generate tips with bonus number", () => {
      testUnit.setTipCount(1);
      testUnit.setWithBonusNumber(true);
      testUnit.generateTips();
      const result = testUnit.getTips();
      expect(result[0].bonusNumber).toBeGreaterThanOrEqual(0);
    });
  });
});
