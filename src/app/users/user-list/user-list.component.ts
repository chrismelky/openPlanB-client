import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { UserListDataSource } from './user-list-datasource';
import { UserResourceService, UserDTO } from '../../rest-api';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UserListDataSource;
  user: UserDTO;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserResourceService) {
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'login'];

  ngOnInit() {
    this.dataSource = new UserListDataSource(this.paginator, this.sort, this.userService);
  }

  add() {
    this.navigateToForm();
  }

  edit(user) {
    this.user = user;
    this.navigateToForm();
  }

  navigateToForm() {
    this.router.navigate(['./form'], { relativeTo: this.route });
  }
}
