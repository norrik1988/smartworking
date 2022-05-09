import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/components/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./features/components/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./features/components/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./features/components/users/users.module').then(m => m.UsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
