import { Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const StarterRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
	data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter Page' }
      ]
    }
  }
];
