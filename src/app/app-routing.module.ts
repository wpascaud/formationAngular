import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {path:'clients', loadChildren:()=>import('./clients/clients.module').then((m)=>m.ClientsModule)},
  {path:'orders', loadChildren:()=>import('./orders/orders.module').then((m)=>m.OrdersModule)},
  {path:'**', loadChildren:()=>import('./page-not-found/page-not-found-routing.module').then((m)=>m.PageNotFoundRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy:PreloadAllModules}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
