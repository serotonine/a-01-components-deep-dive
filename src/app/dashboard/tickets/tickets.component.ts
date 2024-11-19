import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { type Ticket } from './ticket.module';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets:Ticket[] =[];
  // Handlers.
  addHandle(ticketData:{title:string; text: string}){
    const newTicket:Ticket = {
      id: Math.round(Math.random() * 10000).toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    }
    this.tickets.unshift(newTicket);
  }
  closeTicketHandle(id:string){
    this.tickets = this.tickets.map((ticket)=>{
      if(ticket.id === id){
        return {...ticket, status:'closed'}
      }
      return ticket;
    });
  }
  

}
