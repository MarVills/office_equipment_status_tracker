import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

export const StarterRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
	data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter Page' }
      ]
    }
  }
];
