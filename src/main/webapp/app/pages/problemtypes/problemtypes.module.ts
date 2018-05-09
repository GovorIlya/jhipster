import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import {
    ProblemtypesService,
    ProblemtypesComponent,
    ProblemtypesRoute,
} from './';

const PAGE_SET_STATES = [
    ...ProblemtypesRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        RouterModule.forRoot(PAGE_SET_STATES, { useHash: true })
    ],
    declarations: [
    ProblemtypesComponent,
],
    entryComponents: [
    ProblemtypesComponent,
],
    providers: [
    ProblemtypesService,
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JhipsterProblemtypesModule {}
