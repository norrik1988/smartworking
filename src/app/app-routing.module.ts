import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
