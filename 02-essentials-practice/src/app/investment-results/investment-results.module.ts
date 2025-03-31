import { NgModule } from '@angular/core';
import { InvestmentResultsComponent } from './investment-results.component';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [InvestmentResultsComponent],
  imports: [NgIf, NgFor, CurrencyPipe],
  exports: [InvestmentResultsComponent],
})
export class InvestmentResultsModule {}
