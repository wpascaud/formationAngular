import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClientService } from 'src/app/clients/serivces/client.service';

@Injectable({
  providedIn: 'root'
})
export class ClientListResolverService implements Resolve<any>{

  constructor(private  clientService : ClientService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.clientService.list();
  }
}
