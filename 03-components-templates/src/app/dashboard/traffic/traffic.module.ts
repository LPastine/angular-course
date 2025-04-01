import { NgModule } from '@angular/core';
import { TrafficComponent } from './traffic.component';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [TrafficComponent],
  imports: [NgFor],
  exports: [TrafficComponent],
})
export class TrafficModule {}
