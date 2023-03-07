
import { TicketComponent } from "./ticket.component";

describe("TicketComponent", () => {
  let testUnit: TicketComponent;

  beforeEach(() => {
    testUnit = new TicketComponent();
  });

  it("should create", () => {
    expect(testUnit).toBeTruthy();
  });
});
