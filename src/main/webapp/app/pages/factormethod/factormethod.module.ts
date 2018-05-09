import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import {
    FactormethodService,
    FactormethodComponent,
    FactormethodRoute,
} from './';

const PAGE_SET_STATES = [
    ...FactormethodRoute,
];

@NgModule({
    imports: [
        JhipsterSharedModule,
        RouterModule.forRoot(PAGE_SET_STATES, { useHash: true })
    ],
    declarations: [
    FactormethodComponent,
],
    entryComponents: [
    FactormethodComponent,
],
    providers: [
    FactormethodService,
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JhipsterFactormethodModule {}
