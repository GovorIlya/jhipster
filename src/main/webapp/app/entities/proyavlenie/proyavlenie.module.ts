import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import {
    ProyavlenieService,
    ProyavleniePopupService,
    ProyavlenieComponent,
    ProyavlenieDetailComponent,
    ProyavlenieDialogComponent,
    ProyavleniePopupComponent,
    ProyavlenieDeletePopupComponent,
    ProyavlenieDeleteDialogComponent,
    proyavlenieRoute,
    proyavleniePopupRoute,
} from './';

const ENTITY_STATES = [
    ...proyavlenieRoute,
    ...proyavleniePopupRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ProyavlenieComponent,
        ProyavlenieDetailComponent,
        ProyavlenieDialogComponent,
        ProyavlenieDeleteDialogComponent,
        ProyavleniePopupComponent,
        ProyavlenieDeletePopupComponent,
    ],
    entryComponents: [
        ProyavlenieComponent,
        ProyavlenieDialogComponent,
        ProyavleniePopupComponent,
        ProyavlenieDeleteDialogComponent,
        ProyavlenieDeletePopupComponent,
    ],
    providers: [
        ProyavlenieService,
        ProyavleniePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterProyavlenieModule {}
