import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TableauComponent } from './components/tableau/tableau.component';



@NgModule({
  declarations: [ButtonComponent, TableauComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, TableauComponent]
})
export class SharedModule { }
