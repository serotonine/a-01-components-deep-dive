import { Component, DestroyRef, OnDestroy, OnInit , inject} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
// , OnDestroy (Angular version < Angular v.17)
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  // Angular version < Angular v.17
  /* private _interval?: NodeJS.Timeout; */
  // constructor(){
  //   setInterval(() => {
  //     const rand = Math.random();
  //     if(rand < 0.5){
  //       this.currentStatus = 'online';
  //     }
  //     else if(rand < 0.9){
  //       this.currentStatus = 'offline';
  //     }
  //     else{
  //       this.currentStatus = 'unknown';
  //     }

  //   }, 5000)
  // }
  ngOnInit() {
    // Angular version < Angular v.17
    /* this._interval = setInterval(() => { */
    // Angular version >= Angular v.17
    const interval = setInterval(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        this.currentStatus = 'online';
      } else if (rand < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
    this.destroyRef.onDestroy(() => clearInterval(interval) );
  }
  ngAfterViewInit(){
    console.log('AFTER VIEW INIT');
  }
  // if version >= Angular v17.
  private destroyRef = inject(DestroyRef);
  // Else.
  /* ngOnDestroy(): void {
   clearTimeout( this._interval);
  } */
}
