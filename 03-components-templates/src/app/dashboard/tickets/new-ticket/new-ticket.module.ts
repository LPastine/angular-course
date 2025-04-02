import { NgModule } from '@angular/core';
import { NewTicketComponent } from './new-ticket.component';
import { ButtonModule } from '../../../shared/button/button.module';
import { ControlModule } from '../../../shared/control/control.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewTicketComponent],
  imports: [ButtonModule, ControlModule, FormsModule],
  exports: [NewTicketComponent],
})
export class NewTicketModule {}
