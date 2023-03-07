import { ActivatedRoute } from "@angular/router";
import { EMPTY } from "rxjs";
import { LotteryTicketFacadeService } from "../domain";
import { DetailsComponent } from "./details.component";

describe("DetailsComponent", () => {
  let testUnit: DetailsComponent;

  const facadeMock = {} as LotteryTicketFacadeService;
  const activatedRouteMock = {
    params: EMPTY,
  } as unknown as ActivatedRoute;

  beforeEach(() => {
    testUnit = new DetailsComponent(facadeMock, activatedRouteMock);
  });

  it("should create", () => {
    expect(testUnit).toBeTruthy();
  });
});
