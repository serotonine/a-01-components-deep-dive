import {
  Component,
  HostBinding,
  HostListener,
  input,
  inject,
  ViewEncapsulation,
  ElementRef,
  ContentChild,
  contentChild,
  AfterContentInit,
  afterRender,
  afterNextRender,
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
export class InputComponent implements AfterContentInit{
  constructor(){
    // Triggered after all changes in the whole app.
    afterRender(()=> console.log('AFTER RENDER'));
    afterNextRender(()=> console.log('AFTER NEXT RENDER'));
  }
  // host: Alternative.
  /* @HostBinding('class') className="control";
  @HostListener('click') onClick(){do stuff...} */
  label = input.required<string>();
  // Give access to the Host element.
  // Be careful with that.
  private el = inject(ElementRef);
 // @ContentChild('control') private _control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>
  // Angular 17 Alternative.
  private _control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('control');
  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT', this._control());
  }

  // Julie.
  get labelAttributes() {
    return this.label().toLowerCase().trim().split(' ').join('-');
  }
  onClick() {
    console.log('InputComponent', this. _control());
    // console.log(this.el);
  }
}
