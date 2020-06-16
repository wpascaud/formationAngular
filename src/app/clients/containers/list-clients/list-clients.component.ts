import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToAddClient(){
    this.router.navigate(['/clients', 'add'])
  }
}
