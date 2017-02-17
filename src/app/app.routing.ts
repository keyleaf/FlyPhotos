import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PreviewComponent} from './detail/preview.component';
import {DetailComponent} from './detail/detail.component'

const appRoutes: Routes = [
  {
    path: '',
    component: PreviewComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
