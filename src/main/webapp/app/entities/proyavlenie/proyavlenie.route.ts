import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ProyavlenieComponent } from './proyavlenie.component';
import { ProyavlenieDetailComponent } from './proyavlenie-detail.component';
import { ProyavleniePopupComponent } from './proyavlenie-dialog.component';
import { ProyavlenieDeletePopupComponent } from './proyavlenie-delete-dialog.component';

export const proyavlenieRoute: Routes = [
    {
        path: 'proyavlenie',
        component: ProyavlenieComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.proyavlenie.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'proyavlenie/:id',
        component: ProyavlenieDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.proyavlenie.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const proyavleniePopupRoute: Routes = [
    {
        path: 'proyavlenie-new',
        component: ProyavleniePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.proyavlenie.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'proyavlenie/:id/edit',
        component: ProyavleniePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.proyavlenie.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'proyavlenie/:id/delete',
        component: ProyavlenieDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.proyavlenie.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
