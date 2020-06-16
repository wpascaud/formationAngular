import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditClientComponent } from './containers/edit-client/edit-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { AddClientComponent } from './containers/add-client/add-client.component';


const routes: Routes = [
  {path:'',redirectTo: 'list', pathMatch : 'full'},
  {path:'list',component:ListClientsComponent},
  {path:'edit/:id',component:EditClientComponent},
  {path:'add',component:AddClientComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
