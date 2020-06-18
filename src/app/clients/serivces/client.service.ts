import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client } from 'src/app/shared/interface/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  public list(){
    return  this.http.get<Client[]>(`${environment.urlApi}/clients`);
  }

  public get(id:string){
    return  this.http.get<Client>(`${environment.urlApi}/clients/${id}`);
  }

  public delete(id:string){
    return  this.http.delete(`${environment.urlApi}/clients/${id}`);
  }

  public udpate(client:Client){
    return  this.http.put<Client>(`${environment.urlApi}/clients/${client.id}`, client);
  }

  public add(client:Client){
    return  this.http.post<Client>(`${environment.urlApi}/clients`, client);
  }
}
