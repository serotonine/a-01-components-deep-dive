import { Component, Input } from '@angular/core';
import { type TrafficData } from '../dashboard.model';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  
@Input({required:true}) dummyTrafficData!:TrafficData[];
get maxTraffic(){
 return Math.max(...this.dummyTrafficData.map((data) => data.value));

} 
}
