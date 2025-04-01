import { NgModule } from '@angular/core';
import { NewTicketComponent } from './new-ticket.component';
import { ButtonModule } from '../../../shared/button/button.module';
import { ControlModule } from '../../../shared/control/control.module';

@NgModule({
  declarations: [NewTicketComponent],
  imports: [ButtonModule, ControlModule],
  exports: [NewTicketComponent],
})
export class NewTicketModule {}
