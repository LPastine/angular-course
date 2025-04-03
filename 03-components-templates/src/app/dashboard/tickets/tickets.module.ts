import { NgModule } from '@angular/core';
import { TicketsComponent } from './tickets.component';
import { NewTicketModule } from './new-ticket/new-ticket.module';
import { TicketModule } from './ticket/ticket.module';

@NgModule({
  declarations: [TicketsComponent],
  exports: [TicketsComponent],
  imports: [NewTicketModule, TicketModule],
})
export class TicketsModule {}
