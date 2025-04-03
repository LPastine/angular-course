import { Component, EventEmitter, Input, model, Output } from '@angular/core';

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
  // @Input({ required: true }) size!: TwoDimensional;
  // @Output() sizeChange = new EventEmitter<TwoDimensional>();

  size = model.required<TwoDimensional>();

  onReset() {
    this.size.set({
      width: '100',
      height: '100',
    });
  }
}
