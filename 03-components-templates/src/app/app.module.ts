import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './header/header.module';
import { ServerStatusModule } from './dashboard/server-status/server-status.module';
import { TrafficModule } from './dashboard/traffic/traffic.module';
import { TicketsModule } from './dashboard/tickets/tickets.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    ServerStatusModule,
    TrafficModule,
    TicketsModule,
  ],
})
export class AppModule {}
