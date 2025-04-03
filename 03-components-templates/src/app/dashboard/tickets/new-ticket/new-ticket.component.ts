import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  standalone: false,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<{ title: string; text: string }>();
  enteredTitle = '';
  enteredText = '';

  ngOnInit() {
    console.log('On Init');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('After View Init');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      text: this.enteredText,
    });
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
