import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditClientComponent } from './containers/edit-client/edit-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { AdminGuard } from '../shared/guards/admin.guard';
import { ClientListResolverService } from '../shared/guards/client-list-resolver.service';


const routes: Routes = [
  {path:'',redirectTo: 'list', pathMatch : 'full'},
  {path:'list',component:ListClientsComponent, resolve:{clients:ClientListResolverService}},
  {path:'edit/:id',component:EditClientComponent},
  {path:'add',component:AddClientComponent, canActivate : [AdminGuard]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
