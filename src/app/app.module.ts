
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full.component';
import { AppHeaderComponent } from './layouts/header/header.component';
import { AppSidebarComponent } from './layouts/sidebar/sidebar.component';
import { AppBreadcrumbComponent } from './layouts/breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
// import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './auth.guard';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EquipmentsComponent } from './views/equipments/equipments.component';
import { ErrorComponent } from './views/error/error.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ChecklistComponent } from './views/checklist/checklist.component';
import { ReportsComponent } from './views/reports/reports.component';
import { ManageAccountComponent } from './views/manage-account/manage-account.component';
import { RequestComponent } from './views/request/request.component';
import { ActivityLogComponent } from './views/activity-log/activity-log.component';
import { SettingsComponent } from './views/settings/settings.component';
import { AboutAppComponent } from './views/about-app/about-app.component';
import { NotesComponent } from './views/notes/notes.component';
import { DialogComponent } from './views/equipments/components/dialog/dialog.component';
import { ReleaseEquipmentComponent } from './views/release-equipment/release-equipment.component';
import { RecieveEquipmentComponent } from './views/recieve-equipment/recieve-equipment.component';
import { EquipmentCategoriesComponent } from './views/dashboard/dashboard-components/equipment-categories/equipment-categories.component';
import { DashboardEquipmentComponent } from './views/dashboard/dashboard-components/dashboard-equipment/dashboard-equipment.component';
import { DashboardUserComponent } from './views/dashboard/dashboard-components/dashboard-user/dashboard-user.component';
import { DashboardRequestComponent } from './views/dashboard/dashboard-components/dashboard-request/dashboard-request.component';
import { DashboardNotesComponent } from './views/dashboard/dashboard-components/dashboard-notes/dashboard-notes.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    // LoginComponent,
    AppBreadcrumbComponent,
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
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    HttpClientModule,
    SharedModule,
    DragDropModule,

    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,

    NgApexchartsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({}, {}),

  ],
  providers: [
    AuthGuard,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
