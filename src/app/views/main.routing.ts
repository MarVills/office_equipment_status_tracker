import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipmentsComponent } from './equipments/equipments.component';

export const StarterRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
	data: {
      title: 'Dashboard',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Dashboard' }
      ]
    }
  },
  {
    path: 'equipments',
    component: EquipmentsComponent,
	data: {
      title: 'Equipments',
      urls: [
        { title: 'Equipments', url: '/equipments' },
        { title: 'Equipments' }
      ]
    }
  }
];
