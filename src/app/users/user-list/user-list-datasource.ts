import { DataSource } from '@angular/cdk/collections';
import { Observable, pipe, merge, of as observableOf} from 'rxjs';
import {map , switchMap} from 'rxjs/operators';
import { MatPaginator, MatSort } from '@angular/material';


import { UserResourceService, UserDTO } from '../../rest-api';

/**
 * Data source for the UserList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UserListDataSource extends DataSource<UserDTO> {
  data: UserDTO[] = [];

  constructor(private paginator: MatPaginator, private sort: MatSort, private userService: UserResourceService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<UserDTO[]> {
  //  this.loadData();

    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

  //  this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.loadData();
    }));

  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }


  loadData() {
    this.userService.getAllUsersUsingGET().subscribe(data => {
      console.log('data');
      this.data = data;
    });
    return this.data;

  //  const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  // return ;
  }

}
