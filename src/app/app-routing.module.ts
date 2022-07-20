import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { ViewUserComponent } from './user/view-user/view-user.component';

const routes: Routes = [
  
  { path: 'users', 
    children:[
  { path: '',component:ListUsersComponent},
  { path: 'list',component:ListUsersComponent},
  { path: 'delete/:id', component:DeleteUserComponent},
  { path: 'view/:id', component: ViewUserComponent},
  { path: 'edit/:id', component:EditUserComponent},
  { path: 'create', component: AddUserComponent},
]},
  
  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
