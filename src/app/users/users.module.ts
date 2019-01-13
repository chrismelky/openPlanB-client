import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import {
  MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatToolbarModule,
  MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatIconModule, MatMenuModule, MatCheckboxModule
} from '@angular/material';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserListComponent, UserFormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
