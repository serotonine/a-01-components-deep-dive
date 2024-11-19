# ANGULAR Component deep dive => CSS refinement.
### Repository
https://github.com/serotonine/a-01-components-deep-dive


### About
Build [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller) Component Deep Dive: See below links.

***

### ANGULAR 17 
##### Summary
- How to split Components,
- New Component pattern: Extend build-in elements `ngProjectAs`
The app-myComponent is rendered in the DOM, it could be redundant.
- Use `input()` instead of `@Input`,
- Attachment css refining: 
  - `ViewEncapsulation` : `encapsulation: ViewEncapsulation.None`,
  - css `:host`. La pseudo-classe :host permet de cibler l'hôte d'un shadow DOM contenant le CSS à utiliser pour cet hôte. Autrement dit, elle permet de sélectionner un élément personnalisé (custom element) depuis l'intérieur du shadow DOM. *** Avoid unnecessary DOM wrapper. ***
    - `host:` as property of `@Component` : 
    ```js
    @Component({ 
      selector: 'app-input',
      standalone: true,
      templateUrl: './input.component.html'
      styleUrl: './input.component.css',
      encapsulation: ViewEncapsulation.None,
      host:{ class: 'control',}
      })
    ```
  - ! deprecated ! Use `HostBinding` : `@HostBinding('class') className="control"`
- HostListener : 
  ```js
  host:{
    class: 'control',
    '(click)': 'onClick()'
    }
  /* @HostListener('click') onClick(){do stuff...} */
  ```
- [Accessing Host Elements Programatically](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115640)
- [Class Binding repetition](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115648).
`[class]` binding.
- [Template Style binding](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115650)
`<div [style.height]="(dataPoint.value / maxTraffic) * 100 + '%'"></div>`
- ***Component Lifecycle***
[Angular Doc](https://angular.dev/guide/components/lifecycle)
`NgOnInit` must be prefered as constructor(){} ***Good Practice***
- `implements OnInit` => better debug.
- `implements OnDestroy`
- `[(ngModel)]` alternative: Template variables `#myVar`.
  - [128. Extracting Input Values via Template Variables](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115704#questions/22068585)
  - [ViewChild, ElementRef](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115716)
  - [ViewChildren](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115718)
  - [ContentChild, ContentChildren](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115738)
  - [AfterViewInit, AfterContentInit](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115756)
  - [AfterNextRender ,AfterRender hooks, Signal value](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115766)
  - [ effect()](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115772)
  - [ onCleanUp](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44127674)
- [`@for + @empty + $first + $last + $even + $odd + $count `](https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44115798)
- Input alias !Not recommended! `data = input.required<Ticket>({alias: 'dataAlias'});`
- Input transform !Not recommended! `data = input.required<Ticket>(transform: (value)=> +value);`
