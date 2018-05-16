import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ReasonAndProfilactic } from './reason-and-profilactic.model';
import { ReasonAndProfilacticService } from './reason-and-profilactic.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-reason-and-profilactic',
    templateUrl: './reason-and-profilactic.component.html'
})
export class ReasonAndProfilacticComponent implements OnInit, OnDestroy {
reasonAndProfilactics: ReasonAndProfilactic[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private reasonAndProfilacticService: ReasonAndProfilacticService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.reasonAndProfilacticService.query().subscribe(
            (res: HttpResponse<ReasonAndProfilactic[]>) => {
                this.reasonAndProfilactics = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInReasonAndProfilactics();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ReasonAndProfilactic) {
        return item.id;
    }
    registerChangeInReasonAndProfilactics() {
        this.eventSubscriber = this.eventManager.subscribe('reasonAndProfilacticListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
