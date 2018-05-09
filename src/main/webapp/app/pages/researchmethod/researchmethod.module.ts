import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import {
    ResearchmethodService,
    ResearchmethodComponent,
    ResearchmethodRoute,
} from './';
import {PdfViewerModule} from "ng2-pdf-viewer";
import {FactormethodService} from "../factormethod";
import {UnitService} from "../../entities/unit";
import {RatingMethodService} from "../../entities/rating-method";

const PAGE_SET_STATES = [
    ...ResearchmethodRoute,
];

@NgModule({
    imports: [
        PdfViewerModule,
        JhipsterSharedModule,
        RouterModule.forRoot(PAGE_SET_STATES, { useHash: true })
    ],
    declarations: [
    ResearchmethodComponent,
],
    entryComponents: [
    ResearchmethodComponent,
],
    providers: [
        FactormethodService,
        UnitService,
        RatingMethodService,

        ResearchmethodService,
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JhipsterResearchmethodModule {}
