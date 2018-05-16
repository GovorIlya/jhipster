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
import {UnitService} from "../../entities/unit";
import {TypesProblemsService} from "../../entities/types-problems";
import {ProyavlenieService} from "../../entities/proyavlenie/proyavlenie.service";
import {ReasonAndProfilacticService} from "../../entities/reason-and-profilactic/reason-and-profilactic.service";

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

        UnitService,
        TypesProblemsService,
        ProyavlenieService,
        ReasonAndProfilacticService,
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JhipsterProblemtypesModule {}
