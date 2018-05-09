import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import {
    DescriptionService,
    DescriptionComponent,
    DescriptionRoute,
} from './';
import {UnitDescriptionService} from '../../entities/unit-description';
import {UnitService} from '../../entities/unit';

const PAGE_SET_STATES = [
    ...DescriptionRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        RouterModule.forRoot(PAGE_SET_STATES, { useHash: true })
    ],
    declarations: [
    DescriptionComponent,
],
    entryComponents: [
    DescriptionComponent,
],
    providers: [
    DescriptionService,

        UnitDescriptionService,
        UnitService,
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JhipsterDescriptionModule {}
