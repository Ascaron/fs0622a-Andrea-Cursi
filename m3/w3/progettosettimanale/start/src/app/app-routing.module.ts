import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailComponent } from './components/detail/detail.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [


  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"user",
    component:UserComponent,
    canActivate : [AuthGuard]
  },
  {
    path: ":id",
    component: DetailComponent,
  },
  {
    path:"**",
    component: LoginComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
