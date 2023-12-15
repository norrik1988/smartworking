import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/service/auth.service/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/components/login/login.module').then(m => m.LoginModule)
  },
  {

    path: 'home',
    loadChildren: () => import('./features/components/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard], // Applica l'AuthGuard alla rotta 'home'

  },
  {
    path: 'profile',
    loadChildren: () => import('./features/components/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    loadChildren: () => import('./features/components/projects/projects.module').then(m => m.ProjectsModule), canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./features/components/settings/settings.module').then(m => m.SettingsModule), canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./features/components/users/users.module').then(m => m.UsersModule), canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./features/components/register/register.module').then(m => m.RegisterModule), canActivate: [AuthGuard]
  },
  {
    path: 'permit',
    loadChildren: () => import('./features/components/permit/permit.module').then(m => m.PermitModule), canActivate: [AuthGuard]
  },
  {
    path: 'show-map',
    loadChildren: () => import('./features/components/show-map/show-map.module').then(m => m.ShowMapModule), canActivate: [AuthGuard]
  },
  {
    path: 'calendar',
    loadChildren: () => import('./features/components/calendar/calendar.module').then(m => m.CalendarModule), canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'login/sign-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
