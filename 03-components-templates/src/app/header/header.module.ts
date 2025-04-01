import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ButtonModule } from '../shared/button/button.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [ButtonModule],
})
export class HeaderModule {}
