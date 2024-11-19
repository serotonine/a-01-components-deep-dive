import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
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
export class NewTicketComponent {
  // Selector could be a component or template variable. 
  // Must be typed ElementRef with the type of this ElementRef.
  // ? because this element could not be initialized first.
  @ViewChild('currentForm') form?:ElementRef<HTMLFormElement>;
  @Output() submit = new EventEmitter();
  
  onSubmit(title:HTMLInputElement, text:HTMLTextAreaElement){
    // console.log(title.value);
    // console.log(text.value);
    console.dir(this.form?.nativeElement);
    // ? check if form exist to apply the method.
    /* nativeElement that reset does not exist on the type
      because inside of the form,
      we stored that ElementRef object, not the HTMLFormElement.*/
    this.form?.nativeElement.reset(); 
   // this.submit.emit();

  }

}
