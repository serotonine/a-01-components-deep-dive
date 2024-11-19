import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  ViewChildren,
  viewChild,
  AfterViewInit,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { InputComponent } from '../../../shared/input/input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, InputComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  // Selector could be a component or template variable.
  // Must be typed ElementRef with the type of this ElementRef.
  // ? because this element could not be initialized first.
  @ViewChild('currentForm') form?: ElementRef<HTMLFormElement>;
  // As function (Agular 17). Signal feature.
  private _form =
    viewChild.required<ElementRef<HTMLFormElement>>('currentForm');
  //
  // Retrieve multiple elements.
  /* @ViewChildren(ButtonComponent) button;*/
  // With this hook you have the garanty 
  // that currentForm is initialized.
  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT')
  }
  @Output() submit = new EventEmitter();

  onSubmit(title: HTMLInputElement, text: HTMLTextAreaElement) {
    // console.log(title.value);
    // console.log(text.value);
    console.dir(this.form?.nativeElement);
    // ? check if form exist to apply the method.
    /* nativeElement that reset does not exist on the type
      because inside of the form,
      we stored that ElementRef object, not the HTMLFormElement.*/
    this.form?.nativeElement.reset();
    // Function alternative (Agular 17).
    /* this._form.nativeElement.reset(); */
    // this.submit.emit();
  }
}
