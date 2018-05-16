import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { ReasonAndProfilactic } from './reason-and-profilactic.model';
import { ReasonAndProfilacticService } from './reason-and-profilactic.service';

@Component({
    selector: 'jhi-reason-and-profilactic-detail',
    templateUrl: './reason-and-profilactic-detail.component.html'
})
export class ReasonAndProfilacticDetailComponent implements OnInit, OnDestroy {

    reasonAndProfilactic: ReasonAndProfilactic;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private reasonAndProfilacticService: ReasonAndProfilacticService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInReasonAndProfilactics();
    }

    load(id) {
        this.reasonAndProfilacticService.find(id)
            .subscribe((reasonAndProfilacticResponse: HttpResponse<ReasonAndProfilactic>) => {
                this.reasonAndProfilactic = reasonAndProfilacticResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInReasonAndProfilactics() {
        this.eventSubscriber = this.eventManager.subscribe(
            'reasonAndProfilacticListModification',
            (response) => this.load(this.reasonAndProfilactic.id)
        );
    }
}
