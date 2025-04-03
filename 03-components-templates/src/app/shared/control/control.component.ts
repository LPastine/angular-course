import {
  Component,
  ContentChild,
  ElementRef,
  inject,
  // HostBinding,
  // HostListener,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: false,
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }

  @Input({ required: true }) label!: string;
  private el = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}
