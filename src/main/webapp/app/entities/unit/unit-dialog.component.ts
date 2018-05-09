import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Unit } from './unit.model';
import { UnitPopupService } from './unit-popup.service';
import { UnitService } from './unit.service';
import { UnitDescription, UnitDescriptionService } from '../unit-description';

@Component({
    selector: 'jhi-unit-dialog',
    templateUrl: './unit-dialog.component.html'
})
export class UnitDialogComponent implements OnInit {

    unit: Unit;
    isSaving: boolean;

    unitdescriptions: UnitDescription[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private unitService: UnitService,
        private unitDescriptionService: UnitDescriptionService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.unitDescriptionService
            .query({filter: 'unit-is-null'})
            .subscribe((res: HttpResponse<UnitDescription[]>) => {
                if (!this.unit.unitDescription || !this.unit.unitDescription.id) {
                    this.unitdescriptions = res.body;
                } else {
                    this.unitDescriptionService
                        .find(this.unit.unitDescription.id)
                        .subscribe((subRes: HttpResponse<UnitDescription>) => {
                            this.unitdescriptions = [subRes.body].concat(res.body);
                        }, (subRes: HttpErrorResponse) => this.onError(subRes.message));
                }
            }, (res: HttpErrorResponse) => this.onError(res.message));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.unit.id !== undefined) {
            this.subscribeToSaveResponse(
                this.unitService.update(this.unit));
        } else {
            this.subscribeToSaveResponse(
                this.unitService.create(this.unit));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Unit>>) {
        result.subscribe((res: HttpResponse<Unit>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Unit) {
        this.eventManager.broadcast({ name: 'unitListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackUnitDescriptionById(index: number, item: UnitDescription) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-unit-popup',
    template: ''
})
export class UnitPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private unitPopupService: UnitPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.unitPopupService
                    .open(UnitDialogComponent as Component, params['id']);
            } else {
                this.unitPopupService
                    .open(UnitDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}