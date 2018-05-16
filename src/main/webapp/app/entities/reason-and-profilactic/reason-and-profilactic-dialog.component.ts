import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ReasonAndProfilactic } from './reason-and-profilactic.model';
import { ReasonAndProfilacticPopupService } from './reason-and-profilactic-popup.service';
import { ReasonAndProfilacticService } from './reason-and-profilactic.service';
import { Proyavlenie, ProyavlenieService } from '../proyavlenie';

@Component({
    selector: 'jhi-reason-and-profilactic-dialog',
    templateUrl: './reason-and-profilactic-dialog.component.html'
})
export class ReasonAndProfilacticDialogComponent implements OnInit {

    reasonAndProfilactic: ReasonAndProfilactic;
    isSaving: boolean;

    proyavlenies: Proyavlenie[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private reasonAndProfilacticService: ReasonAndProfilacticService,
        private proyavlenieService: ProyavlenieService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.proyavlenieService.query()
            .subscribe((res: HttpResponse<Proyavlenie[]>) => { this.proyavlenies = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.reasonAndProfilactic.id !== undefined) {
            this.subscribeToSaveResponse(
                this.reasonAndProfilacticService.update(this.reasonAndProfilactic));
        } else {
            this.subscribeToSaveResponse(
                this.reasonAndProfilacticService.create(this.reasonAndProfilactic));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ReasonAndProfilactic>>) {
        result.subscribe((res: HttpResponse<ReasonAndProfilactic>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: ReasonAndProfilactic) {
        this.eventManager.broadcast({ name: 'reasonAndProfilacticListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackProyavlenieById(index: number, item: Proyavlenie) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-reason-and-profilactic-popup',
    template: ''
})
export class ReasonAndProfilacticPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private reasonAndProfilacticPopupService: ReasonAndProfilacticPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.reasonAndProfilacticPopupService
                    .open(ReasonAndProfilacticDialogComponent as Component, params['id']);
            } else {
                this.reasonAndProfilacticPopupService
                    .open(ReasonAndProfilacticDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
