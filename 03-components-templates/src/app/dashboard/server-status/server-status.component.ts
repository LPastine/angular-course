import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: false,
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus = 'online';
}
