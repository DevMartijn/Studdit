import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthComponent } from './components/auth/auth.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupListComponent } from './components/groups/group-list/group-list.component';
import { GroupDetailComponent } from './components/groups/group-detail/group-detail.component';
import { GroupEditComponent } from './components/groups/group-edit/group-edit.component';
import { PostCreateComponent } from './components/posts/post-create/post-create.component';
import { AuthGuard } from './components/auth/auth.guard';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: UserRegisterComponent },

  { path: 'group', component: GroupsComponent, canActivate: [AuthGuard]},
  { path: 'group/list', component: GroupListComponent, canActivate: [AuthGuard] },
  { path: 'group/list/:id', component: GroupDetailComponent, canActivate: [AuthGuard] },
  { path: 'group/new', component: GroupEditComponent, canActivate: [AuthGuard] },
  { path: 'post', component: PostCreateComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
