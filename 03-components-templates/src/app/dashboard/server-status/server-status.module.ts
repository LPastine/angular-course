import { NgModule } from '@angular/core';
import { ServerStatusComponent } from './server-status.component';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [ServerStatusComponent],
  imports: [NgIf],
  exports: [ServerStatusComponent],
})
export class ServerStatusModule {}
