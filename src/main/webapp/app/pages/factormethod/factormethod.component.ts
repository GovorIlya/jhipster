import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';
import { Observable } from 'rxjs/Rx';

import { Factormethod } from './factormethod.model';
import { FactormethodService } from './factormethod.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-factormethod',
    templateUrl: './factormethod.component.html'
})
export class FactormethodComponent implements OnInit, OnDestroy {

    factormethod: Factormethod = new Factormethod();

    currentAccount: any;
    eventSubscriber: Subscription;
    isSaving: Boolean;
    routeData: any;
    links: any;
    totalItems: any;
    queryCount: any;
    itemsPerPage: any;
    page: any;
    predicate: any;
    previousPage: any;
    reverse: any;

    constructor(
        private factormethodService: FactormethodService,
        private parseLinks: JhiParseLinks,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
    }

    ngOnInit() {

        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });

        this.registerChangeInFactormethods();
    }

    ngOnDestroy() {

        this.eventManager.destroy(this.eventSubscriber);
    }
    registerChangeInFactormethods() {
        this.eventSubscriber = this.eventManager.subscribe('factormethodListModification', (response) => this.loadAll());
    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
