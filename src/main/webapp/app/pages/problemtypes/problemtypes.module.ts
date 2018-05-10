import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import {
    ProblemtypesService,
    ProblemtypesComponent,
    ProblemtypesRoute,
} from './';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule, RatingModule, CalendarModule, ButtonModule } from 'primeng/primeng';
import {DataTableModule} from 'primeng/datatable';
import {DataListModule} from 'primeng/datalist';

const PAGE_SET_STATES = [
    ...ProblemtypesRoute,
];

@NgModule({
    imports: [
        BrowserAnimationsModule,
        AccordionModule,
        RatingModule,
        CalendarModule,
        ButtonModule,
        DataTableModule,
        DataListModule,
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
