import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ListOrdersComponent } from './containers/list-orders/list-orders.component';
import { AddOrdersComponent } from './containers/add-orders/add-orders.component';
import { EditOrdersComponent } from './containers/edit-orders/edit-orders.component';


@NgModule({
  declarations: [ListOrdersComponent, AddOrdersComponent, EditOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
