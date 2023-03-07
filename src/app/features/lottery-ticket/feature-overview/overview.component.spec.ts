import { Router } from "@angular/router";
import { LotteryTicketFacadeService } from "../domain";

import { OverviewComponent } from "./overview.component";

describe("OverviewComponent", () => {
  let testUnit: OverviewComponent;
  const facadeMock = {} as LotteryTicketFacadeService;
  const routerMock = {} as Router;

  beforeEach(() => {
    testUnit = new OverviewComponent(facadeMock, routerMock);
  });

  it("should create", () => {
    expect(testUnit).toBeTruthy();
  });
});
