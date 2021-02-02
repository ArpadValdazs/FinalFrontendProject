import { Component, OnInit } from '@angular/core';
import {AdminPanelService} from '../../admin-panel.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
