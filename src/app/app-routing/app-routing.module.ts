import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserRequestComponent } from '../user-request/user-request.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },  
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  }, //canActivate: [AuthGuard]
  { path: 'user-request', component: UserRequestComponent, canActivate: [AuthGuard] }, // canActivate: [AuthGuard]
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
