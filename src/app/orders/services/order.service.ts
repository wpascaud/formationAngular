import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Order } from 'src/app/shared/interface/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  public list(){
    return  this.http.get<Order[]>(`${environment.urlApi}/orders`);
  }

  public get(id:string){
    return  this.http.get<Order>(`${environment.urlApi}/orders/${id}`);
  }

  public delete(id:string){
    return  this.http.delete(`${environment.urlApi}/orders/${id}`);
  }

  public udpate(order:Order){
    return  this.http.put<Order>(`${environment.urlApi}/orders/${order.id}`, order);
  }

  public add(order:Order){
    return  this.http.post<Order>(`${environment.urlApi}/orders}`, order);
  }
}
