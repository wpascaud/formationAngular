import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../serivces/client.service';
import { Client } from 'src/app/shared/interface/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(private clientService : ClientService, private router:Router) { }

  ngOnInit(): void {
  }

  addClient(data:Client){
    this.clientService.add(data).subscribe((result)=>this.router.navigate(['/clients','list']));
  }

}
