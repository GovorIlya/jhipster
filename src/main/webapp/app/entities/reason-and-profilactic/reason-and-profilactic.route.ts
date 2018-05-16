import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ReasonAndProfilacticComponent } from './reason-and-profilactic.component';
import { ReasonAndProfilacticDetailComponent } from './reason-and-profilactic-detail.component';
import { ReasonAndProfilacticPopupComponent } from './reason-and-profilactic-dialog.component';
import { ReasonAndProfilacticDeletePopupComponent } from './reason-and-profilactic-delete-dialog.component';

export const reasonAndProfilacticRoute: Routes = [
    {
        path: 'reason-and-profilactic',
        component: ReasonAndProfilacticComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.reasonAndProfilactic.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'reason-and-profilactic/:id',
        component: ReasonAndProfilacticDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.reasonAndProfilactic.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const reasonAndProfilacticPopupRoute: Routes = [
    {
        path: 'reason-and-profilactic-new',
        component: ReasonAndProfilacticPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.reasonAndProfilactic.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'reason-and-profilactic/:id/edit',
        component: ReasonAndProfilacticPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.reasonAndProfilactic.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'reason-and-profilactic/:id/delete',
        component: ReasonAndProfilacticDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipsterApp.reasonAndProfilactic.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
