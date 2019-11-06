import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './author/authors/authors.component';
import { UsersComponent } from './user/users/users.component';
import { RecordsComponent } from './record/records/records.component';

const routes: Routes = [
  {
    path: 'authors', component: AuthorsComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'records', component: RecordsComponent
  }
]

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
