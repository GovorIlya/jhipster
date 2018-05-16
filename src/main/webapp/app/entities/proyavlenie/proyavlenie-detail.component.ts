import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { Proyavlenie } from './proyavlenie.model';
import { ProyavlenieService } from './proyavlenie.service';

@Component({
    selector: 'jhi-proyavlenie-detail',
    templateUrl: './proyavlenie-detail.component.html'
})
export class ProyavlenieDetailComponent implements OnInit, OnDestroy {

    proyavlenie: Proyavlenie;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private proyavlenieService: ProyavlenieService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInProyavlenies();
    }

    load(id) {
        this.proyavlenieService.find(id)
            .subscribe((proyavlenieResponse: HttpResponse<Proyavlenie>) => {
                this.proyavlenie = proyavlenieResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInProyavlenies() {
        this.eventSubscriber = this.eventManager.subscribe(
            'proyavlenieListModification',
            (response) => this.load(this.proyavlenie.id)
        );
    }
}
