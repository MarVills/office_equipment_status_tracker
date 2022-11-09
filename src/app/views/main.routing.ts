import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ReportsComponent } from './reports/reports.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { RequestComponent } from './request/request.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { ReleaseEquipmentComponent } from './release-equipment/release-equipment.component';
import { RecieveEquipmentComponent } from './recieve-equipment/recieve-equipment.component';


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
    path: 'inventory/equipments',
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
    path: 'inventory/release-equipment',
    component:  ReleaseEquipmentComponent,
    data: {
      title: 'E',
      urls: [
        { title: 'Equipments', url: '/equipments' },
        { title: 'Equipments' }
      ]
    }
  },
  {
    path: 'inventory/recieve-equipment',
    component: RecieveEquipmentComponent,
    data: {
      title: 'Equipments',
      urls: [
        { title: 'Equipments', url: '/equipments' },
        { title: 'Equipments' }
      ]
    }
  },
  {
    path: 'checklist',
    component: ChecklistComponent,
    data: {
      title: 'Checklist',
      urls: [
        { title: 'Checklist', url: '/checklist' },
        { title: 'Checklist' }
      ]
    }
  },
  {
    path: 'reports',
    component: ReportsComponent,
    data: {
      title: 'Reports',
      urls: [
        { title: 'Reports', url: '/reports' },
        { title: 'Reports' }
      ]
    }
  },
  {
    path: 'manage-account',
    component: ManageAccountComponent,
    data: {
      title: 'Manage Account',
      urls: [
        { title: 'Manage Account', url: '/manage-account' },
        { title: 'Manage Account' }
      ]
    }
  },
  {
    path: 'request',
    component: RequestComponent,
    data: {
      title: 'Request',
      urls: [
        { title: 'Request', url: '/request' },
        { title: 'Request' }
      ]
    }
  },
  {
    path: 'activity-log',
    component: ActivityLogComponent,
    data: {
      title: 'Activity Log',
      urls: [
        { title: 'Activity Log', url: '/activity-log' },
        { title: 'Activity Log' }
      ]
    }
  },
];
