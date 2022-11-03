import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        component: FullComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'starter',
                loadChildren: () => import('./views/main.module').then(m => m.StarterModule)
            },
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
