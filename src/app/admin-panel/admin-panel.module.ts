import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { ItemsListComponent } from './items-list/items-list.component';



@NgModule({
  declarations: [UserListComponent, ItemsListComponent],
  imports: [
    CommonModule
  ]
})
export class AdminPanelModule { }
