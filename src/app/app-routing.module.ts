import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAddLoanComponent } from './admin-add-loan/admin-add-loan.component';
import { AdminEditLoanComponent } from './admin-edit-loan/admin-edit-loan.component';
import { AdminPagesGuard } from './admin-pages.guard';
import { AdminUpdateLoanComponent } from './admin-update-loan/admin-update-loan.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserPageGuard } from './user-page.guard';
import { UserSearchLoanComponent } from './user-search-loan/user-search-loan.component';

export const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'searchLoan', component:UserSearchLoanComponent, canActivate:[UserPageGuard]},
  {path:'updateLoan', component:AdminUpdateLoanComponent, canActivate:[AdminPagesGuard]},
  {path:'addLoan',component:AdminAddLoanComponent, canActivate:[AdminPagesGuard]},
  {path:'editLoan/:id',component:AdminEditLoanComponent, canActivate:[AdminPagesGuard]},
  {path:'logout',component:LoginPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }
