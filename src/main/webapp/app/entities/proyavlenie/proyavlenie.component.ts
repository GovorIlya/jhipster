import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Proyavlenie } from './proyavlenie.model';
import { ProyavlenieService } from './proyavlenie.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-proyavlenie',
    templateUrl: './proyavlenie.component.html'
})
export class ProyavlenieComponent implements OnInit, OnDestroy {
proyavlenies: Proyavlenie[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private proyavlenieService: ProyavlenieService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.proyavlenieService.query().subscribe(
            (res: HttpResponse<Proyavlenie[]>) => {
                this.proyavlenies = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInProyavlenies();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Proyavlenie) {
        return item.id;
    }
    registerChangeInProyavlenies() {
        this.eventSubscriber = this.eventManager.subscribe('proyavlenieListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
