import { NgModule } from '@angular/core';
import { InvestmentResultsComponent } from './investment-results.component';
import { NgFor, NgIf } from '@angular/common';

@NgModule({
  declarations: [InvestmentResultsComponent],
  imports: [NgIf, NgFor],
  exports: [InvestmentResultsComponent],
})
export class InvestmentResultsModule {}
