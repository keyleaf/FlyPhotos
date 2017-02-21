import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PreviewComponent} from './detail/preview.component';
import {DetailComponent} from './detail/detail.component'
import {RegisterComponent} from './login/register.component'

const appRoutes: Routes = [

  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: PreviewComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
