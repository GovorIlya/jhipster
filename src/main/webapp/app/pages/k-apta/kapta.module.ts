import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../../shared';
import {
    KaptaService,
    KaptaComponent,
    KaptaRoute,
    SafePipe

} from './';import { AgmCoreModule } from '@agm/core';
import {GoogleMapsModule} from 'google-maps-angular2';

import { PdfViewerModule } from 'ng2-pdf-viewer';

const PAGE_SET_STATES = [
    ...KaptaRoute,
];

@NgModule({
    imports: [
        PdfViewerModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        JhipsterSharedModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCjkeT97vq6sgTSmPI-z_SALPktHWOqXLQ',
            libraries:['places']
        }),
        RouterModule.forRoot(PAGE_SET_STATES, { useHash: true }),

        GoogleMapsModule.forRoot({
            url: 'AIzaSyBlu2ILbZpC9bkvtfqWmq43eAFZMRP5Zgw'
        })
    ],
    declarations: [
    KaptaComponent,
        SafePipe
],
    entryComponents: [
    KaptaComponent,
],
    providers: [
    KaptaService,
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class JhipsterKaptaModule {}
