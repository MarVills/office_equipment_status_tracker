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
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ChecklistComponent } from './checklist/checklist.component';
import { ReportsComponent } from './reports/reports.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { RequestComponent } from './request/request.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { NotesComponent } from './notes/notes.component';
import { DialogComponent } from './equipments/components/dialog/dialog.component';
import { ReleaseEquipmentComponent } from './release-equipment/release-equipment.component';
import { RecieveEquipmentComponent } from './recieve-equipment/recieve-equipment.component';
import { EquipmentCategoriesComponent } from './dashboard/dashboard-components/equipment-categories/equipment-categories.component';
import { DashboardEquipmentComponent } from './dashboard/dashboard-components/dashboard-equipment/dashboard-equipment.component';
import { DashboardUserComponent } from './dashboard/dashboard-components/dashboard-user/dashboard-user.component';
import { DashboardRequestComponent } from './dashboard/dashboard-components/dashboard-request/dashboard-request.component';
import { DashboardNotesComponent } from './dashboard/dashboard-components/dashboard-notes/dashboard-notes.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(StarterRoutes),
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [
    DashboardComponent, 
    EquipmentsComponent, 
    ErrorComponent, 
    ChecklistComponent,
    ReportsComponent,
    ManageAccountComponent,
    RequestComponent,
    ActivityLogComponent,
    SettingsComponent,
    AboutAppComponent,
    NotesComponent,
    DialogComponent,
    ReleaseEquipmentComponent,
    RecieveEquipmentComponent,
    EquipmentCategoriesComponent,
    DashboardEquipmentComponent,
    DashboardUserComponent,
    DashboardRequestComponent,
    DashboardNotesComponent,
    ]
})
export class StarterModule {}
