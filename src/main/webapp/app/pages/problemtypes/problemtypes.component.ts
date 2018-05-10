import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';
import { Observable } from 'rxjs/Rx';

import { Problemtypes } from './problemtypes.model';
import { ProblemtypesService } from './problemtypes.service';
import { Principal } from '../../shared';
import {testclass} from './testclass'
import {container} from "./container";

@Component({
    selector: 'jhi-problemtypes',
    templateUrl: './problemtypes.component.html'
})
export class ProblemtypesComponent implements OnInit, OnDestroy {

    problemtypes: any;

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
    container:testclass[] = [];

    constructor(
        private problemtypesService: ProblemtypesService,
        private parseLinks: JhiParseLinks,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
    }

    ngOnInit() {
        let problem = new Problemtypes();
        problem.problem = "qwe";
        problem.resheniye = "11111";
        problem.variant = "11111";
        let problem1 = new Problemtypes();
        problem1.problem = "abc";
        problem1.resheniye = "2222222";
        problem1.variant = "22222222";
        let test = new testclass();
        test.types = [];
        test.types.push(problem);
        test.types.push(problem);
        test.types.push(problem1);
        test.types.push(problem1);
        test.kartinka = "https://www.primefaces.org/primeng/assets/showcase/images/demo/car/Fiat.png";
        test.stroka = "1111111111";
        let test1 = new testclass();
        test1.types = [];
        test1.kartinka = "https://www.primefaces.org/primeng/assets/showcase/images/demo/car/Fiat.png";
        test1.stroka = "222222222";
        this.container.push(test);
        this.container.push(test1);
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });

        this.registerChangeInProblemtypes();
    }

    ngOnDestroy() {

        this.eventManager.destroy(this.eventSubscriber);
    }
    registerChangeInProblemtypes() {
        this.eventSubscriber = this.eventManager.subscribe('problemtypesListModification', (response) => this.loadAll());
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
