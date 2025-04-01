import { NgModule } from '@angular/core';
import { NewTicketComponent } from './new-ticket.component';
import { ButtonModule } from '../../../shared/button/button.module';

@NgModule({
  declarations: [NewTicketComponent],
  imports: [ButtonModule],
  exports: [NewTicketComponent],
})
export class NewTicketModule {}
