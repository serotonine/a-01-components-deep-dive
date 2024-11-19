import { Component, input, signal, output} from '@angular/core';
import { Ticket } from '../ticket.module';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
data = input.required<Ticket>();
isExpanded = signal(true);
closeTicket = output();
onToggleExpanded(){
  /* this.isExpanded.set(!this.isExpanded()); */
  // Alternative way.
  this.isExpanded.update((expanded) => !expanded);
}
onCloseTicket(){
  this.closeTicket.emit();
}

}
