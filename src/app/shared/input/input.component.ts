import {
  Component,
  HostBinding,
  HostListener,
  input,
  inject,
  ViewEncapsulation,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class InputComponent {
  // host: Alternative.
  /* @HostBinding('class') className="control";
  @HostListener('click') onClick(){do stuff...} */
  label = input.required<string>();
  // Give access to the Host element.
  // Be careful with that.
  private el = inject(ElementRef);
  get labelAttributes() {
    return this.label().toLowerCase().trim().split(' ').join('-');
  }
  onClick() {
    // console.log('Clicked');
    // console.log(this.el);
  }
}
