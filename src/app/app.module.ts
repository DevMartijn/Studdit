import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthenticationService } from './components/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupListComponent } from './components/groups/group-list/group-list.component';
import { GroupDetailComponent } from './components/groups/group-detail/group-detail.component';
import { GroupEditComponent } from './components/groups/group-edit/group-edit.component';
import { PostCreateComponent } from './components/posts/post-create/post-create.component';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    HeaderComponent,
    GroupsComponent,
    GroupListComponent,
    GroupDetailComponent,
    GroupEditComponent,
    PostCreateComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
