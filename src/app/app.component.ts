import { Component } from '@angular/core';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { HeaderComponent } from './header/header.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    DashboardItemComponent,
    TrafficComponent,
    TicketsComponent,
    ServerStatusComponent,
  ],
})
export class AppComponent {
 
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  
}
