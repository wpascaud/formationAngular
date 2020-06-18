import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../serivces/client.service';
import { Client } from 'src/app/shared/interface/client';
import { ClientState } from 'src/app/shared/enums/client-state.enum';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss'],
})
export class ListClientsComponent implements OnInit {
  //declaration variables locale
  clients: Client[] = [];
  clientStates = Object.values(ClientState);

  //injection de dépendance
  constructor(private router: Router, private clientService: ClientService, private route :ActivatedRoute) {}

  ngOnInit(): void {
    // this.clientService.list().subscribe((data) => (this.clients = data));

    this.route.data.subscribe(
      (d:{clients : Client[]}) =>{
        this.clients = d.clients;
      });
  }

  //methodes
  goToAddClient() {
    this.router.navigate(['/clients', 'add']);
  }

  updateClient(event, client: Client) {
    console.log(event);
    this.clientService.udpate(client).subscribe(
      (data) => {
        console.log(data);
    });
  }
}
