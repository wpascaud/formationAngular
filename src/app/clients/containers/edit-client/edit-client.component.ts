import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../serivces/client.service';
import { Client } from 'src/app/shared/interface/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss'],
})
export class EditClientComponent implements OnInit {

  id: string;
  client: Client;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.clientService.get(this.id).subscribe((data) => (this.client = data));
    });
  }

  editClient(data: Client) {
    console.log(data);
    data.id = this.client.id;
    this.clientService
      .udpate(data)
      .subscribe((result) => this.router.navigate(['/clients', 'list']));
  }
}
