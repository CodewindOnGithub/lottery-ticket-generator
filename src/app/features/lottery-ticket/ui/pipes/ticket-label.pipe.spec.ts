import { TicketLabelPipe } from './ticket-label.pipe';

describe('TicketLabelPipe', () => {
  it('create an instance', () => {
    const pipe = new TicketLabelPipe();
    expect(pipe).toBeTruthy();
  });
});
