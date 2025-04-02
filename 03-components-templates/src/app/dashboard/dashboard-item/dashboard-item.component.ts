import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: false,
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  host: {
    class: 'dashboard-item',
  },
})
export class DashboardItemComponent {
  @Input({ required: true }) image!: {
    src: string;
    alt: string;
  };
  @Input({ required: true }) title!: string;
}
