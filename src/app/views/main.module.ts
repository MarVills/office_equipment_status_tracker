import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarterRoutes } from './main.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { ErrorComponent } from './error/error.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardCheckListComponent } from './dashboard/dashboard-components/dashboard-check-list/dashboard-check-list.component';
import { DashboardEquipmentsComponent } from './dashboard/dashboard-components/dashboard-equipments/dashboard-equipments.component';
import { DashboardReportsComponent } from './dashboard/dashboard-components/dashboard-reports/dashboard-reports.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(StarterRoutes),
    NgApexchartsModule
    
  ],
  declarations: [
    DashboardComponent, 
    EquipmentsComponent, 
    ErrorComponent, 
    DashboardCheckListComponent, 
    DashboardEquipmentsComponent,
    DashboardReportsComponent,
    ]
})
export class StarterModule {}
