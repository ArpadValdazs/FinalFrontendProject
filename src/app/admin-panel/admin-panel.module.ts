import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './admin-panel/user-list/user-list.component';
import { ItemsListComponent } from './admin-panel/items-list/items-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';



@NgModule({
  declarations: [ItemsListComponent, AdminPanelComponent, UserListComponent],
  imports: [
    CommonModule,
  ]
})
export class AdminPanelModule { }
