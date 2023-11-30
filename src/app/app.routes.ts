import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LogoutComponent } from './components/auth/logout/logout.component';

export const routes: Routes = [
    {path:'', redirectTo:'/inicio', pathMatch:'full'},
    {path:'inicio', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'logout', component: LogoutComponent}
];
