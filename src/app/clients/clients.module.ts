import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { EditClientComponent } from './containers/edit-client/edit-client.component';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormClientComponent } from './components/form-client/form-client.component';


@NgModule({
  declarations: [ListClientsComponent, AddClientComponent, EditClientComponent, FormClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    TemplatesModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ClientsModule { }
