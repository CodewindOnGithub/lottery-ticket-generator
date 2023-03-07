# LotteryTicketGenerator

## Project Structure

### features

Holds a single feature and its business logic

__domain__

 * entities
    * holds Business logic (with tests => lottery-ticket.spec.ts)
 * infrastructure 
    * persist and load data
* utils
    * utility funcions
* facade
    * entry point for domain logic

__feature-__

Holds container components, using facade to access business logic

__ui__

Holds dump components using @Input @Output only
