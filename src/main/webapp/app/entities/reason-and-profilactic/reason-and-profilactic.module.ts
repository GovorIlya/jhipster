import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import {
    ReasonAndProfilacticService,
    ReasonAndProfilacticPopupService,
    ReasonAndProfilacticComponent,
    ReasonAndProfilacticDetailComponent,
    ReasonAndProfilacticDialogComponent,
    ReasonAndProfilacticPopupComponent,
    ReasonAndProfilacticDeletePopupComponent,
    ReasonAndProfilacticDeleteDialogComponent,
    reasonAndProfilacticRoute,
    reasonAndProfilacticPopupRoute,
} from './';

const ENTITY_STATES = [
    ...reasonAndProfilacticRoute,
    ...reasonAndProfilacticPopupRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ReasonAndProfilacticComponent,
        ReasonAndProfilacticDetailComponent,
        ReasonAndProfilacticDialogComponent,
        ReasonAndProfilacticDeleteDialogComponent,
        ReasonAndProfilacticPopupComponent,
        ReasonAndProfilacticDeletePopupComponent,
    ],
    entryComponents: [
        ReasonAndProfilacticComponent,
        ReasonAndProfilacticDialogComponent,
        ReasonAndProfilacticPopupComponent,
        ReasonAndProfilacticDeleteDialogComponent,
        ReasonAndProfilacticDeletePopupComponent,
    ],
    providers: [
        ReasonAndProfilacticService,
        ReasonAndProfilacticPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterReasonAndProfilacticModule {}
