import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './author/authors/authors.component';
import { UsersComponent } from './user/users/users.component';

const routes: Routes = [
  {
    path: 'authors', component: AuthorsComponent
  },
  {
    path: 'users', component: UsersComponent
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
