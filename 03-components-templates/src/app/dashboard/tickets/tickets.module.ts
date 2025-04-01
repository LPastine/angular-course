import { NgModule } from '@angular/core';
import { TicketsComponent } from './tickets.component';
import { NewTicketModule } from './new-ticket/new-ticket.module';

@NgModule({
  declarations: [TicketsComponent],
  exports: [TicketsComponent],
  imports: [NewTicketModule],
})
export class TicketsModule {}
