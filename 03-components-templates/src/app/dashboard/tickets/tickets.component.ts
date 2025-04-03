import { Component } from '@angular/core';
import { Ticket } from './ticket/ticket.model';

@Component({
  selector: 'app-tickets',
  standalone: false,
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Array<Ticket> = [];

  onAdd(ticketData: { title: string; text: string }) {
    const { title, text } = ticketData;
    const ticket: Ticket = {
      title,
      request: text,
      id: Math.random().toString(),
      status: 'open',
    };

    this.tickets.push(ticket);
  }
}
