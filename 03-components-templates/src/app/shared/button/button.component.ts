import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
