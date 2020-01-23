import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard]},
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard]},
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule', canActivate: [AuthGuard]},
  { path: 'rooms', loadChildren: './rooms/rooms.module#RoomsPageModule', canActivate: [AuthGuard]},
  { path: 'about', loadChildren: './about/about.module#AboutPageModule', canActivate: [AuthGuard]},
  { path: 'payments', loadChildren: './perfil/payments/payments.module#PaymentsPageModule', canActivate: [AuthGuard]},
  { path: 'account', loadChildren: './perfil/account/account.module#AccountPageModule', canActivate: [AuthGuard]},
  { path: 'rent', loadChildren: './rooms/rent/rent.module#RentPageModule', canActivate: [AuthGuard]},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
