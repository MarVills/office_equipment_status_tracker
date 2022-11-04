import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './views/error/error.component';


export const AppRoutes: Routes = [
    {
        path: '',
        component: FullComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: '/spa/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'spa',
                loadChildren: () => import('./views/main.module').then(m => m.StarterModule)
            },
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
    
        path: '**',
        component: ErrorComponent,
        
    }
];
