import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrdersComponent } from './containers/list-orders/list-orders.component';
import { EditOrdersComponent } from './containers/edit-orders/edit-orders.component';
import { AddOrdersComponent } from './containers/add-orders/add-orders.component';


const routes: Routes = [
  {path:'',redirectTo: 'list', pathMatch : 'full'},
{path:'list',component:ListOrdersComponent},
{path:'edit/:id',component:EditOrdersComponent},
{path:'add',component:AddOrdersComponent}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
