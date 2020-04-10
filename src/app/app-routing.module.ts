import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddMontreComponent } from './components/add-montre/add-montre.component';
import { ListMontresComponent } from './components/list-montres/list-montres.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayMontreComponent } from './components/display-montre/display-montre.component';
import { UpdateMontreComponent } from './components/update-montre/update-montre.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SearchMontreComponent } from './components/search-montre/search-montre.component';
import { SignupComponent } from './components/signup/signup.component';


//,  canActivate: [AuthGuardService]
const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "addMontre", component: AddMontreComponent},
  {path: "montres", component: ListMontresComponent},
  {path: "admin", component: AdminComponent},
  {path: "montres/:id", component: DisplayMontreComponent},
  {path: 'updateMontre/:id', component: UpdateMontreComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchMontreComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
