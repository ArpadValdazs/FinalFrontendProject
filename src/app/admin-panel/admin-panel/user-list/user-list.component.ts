import { Component, OnInit } from '@angular/core';
import {AdminPanelService} from '../../admin-panel.service';
import {UserListInterface} from '../../../../interfaces/userList.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: UserListInterface[] = [];
  constructor(private adminService: AdminPanelService) { }
  getUsers(): void {
    this.adminService.getUserList().subscribe((data: { users: UserListInterface[] }) => {
      this.userList = data.users;
      console.log(this.userList);
    });
  }
  ngOnInit(): void {
    this.getUsers();
  }

}
