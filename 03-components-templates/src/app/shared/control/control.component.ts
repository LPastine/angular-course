import {
  AfterContentInit,
  afterNextRender,
  afterRender,
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
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }

  @Input({ required: true }) label!: string;
  private el = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  constructor() {
    afterRender(() => {
      // Executes after any change on the app anywhere
      console.log('afterRender');
    });

    afterNextRender(() => {
      // Executes after the next change on the app anywhere
      console.log('afterNextRender');
    });
  }

  ngAfterContentInit() {
    // ...
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}
