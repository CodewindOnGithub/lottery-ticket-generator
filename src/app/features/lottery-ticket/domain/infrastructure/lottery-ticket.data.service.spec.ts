
import { LotteryTicketDataService } from "./lottery-ticket.data.service";

describe("LotteryTicketDataService", () => {
  let testUnit: LotteryTicketDataService;

  const facadeMock = {} as LotteryTicketDataService;

  beforeEach(() => {
    testUnit = new LotteryTicketDataService();
  });

  it("should be created", () => {
    expect(testUnit).toBeTruthy();
  });
});
