import { LotteryTicketDataService } from "./infrastructure";

import { LotteryTicketFacadeService } from "./lottery-ticket.facade.service";

describe("LotteryTicketFacadeService", () => {
  let testUnit: LotteryTicketFacadeService;

  const facadeMock = {} as LotteryTicketDataService;

  beforeEach(() => {
    testUnit = new LotteryTicketFacadeService(facadeMock);
  });

  it("should be created", () => {
    expect(testUnit).toBeTruthy();
  });
});
