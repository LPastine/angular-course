import { Component, EventEmitter, Input, Output } from '@angular/core';

interface TwoDimensional {
  width: string;
  height: string;
}

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  @Input({ required: true }) size!: TwoDimensional;
  @Output() sizeChange = new EventEmitter<TwoDimensional>();

  onReset() {
    this.sizeChange.emit({
      width: '200',
      height: '100',
    });
  }
}
