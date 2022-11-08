import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ReportsComponent } from './reports/reports.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { RequestComponent } from './request/request.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';


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
  },
  {
    path: 'cheklist',
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
