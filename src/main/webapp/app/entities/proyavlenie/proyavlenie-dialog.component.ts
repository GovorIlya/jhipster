import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Proyavlenie } from './proyavlenie.model';
import { ProyavleniePopupService } from './proyavlenie-popup.service';
import { ProyavlenieService } from './proyavlenie.service';
import { TypesProblems, TypesProblemsService } from '../types-problems';

@Component({
    selector: 'jhi-proyavlenie-dialog',
    templateUrl: './proyavlenie-dialog.component.html'
})
export class ProyavlenieDialogComponent implements OnInit {

    proyavlenie: Proyavlenie;
    isSaving: boolean;

    typesproblems: TypesProblems[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private proyavlenieService: ProyavlenieService,
        private typesProblemsService: TypesProblemsService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.typesProblemsService.query()
            .subscribe((res: HttpResponse<TypesProblems[]>) => { this.typesproblems = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.proyavlenie.id !== undefined) {
            this.subscribeToSaveResponse(
                this.proyavlenieService.update(this.proyavlenie));
        } else {
            this.subscribeToSaveResponse(
                this.proyavlenieService.create(this.proyavlenie));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Proyavlenie>>) {
        result.subscribe((res: HttpResponse<Proyavlenie>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Proyavlenie) {
        this.eventManager.broadcast({ name: 'proyavlenieListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackTypesProblemsById(index: number, item: TypesProblems) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-proyavlenie-popup',
    template: ''
})
export class ProyavleniePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private proyavleniePopupService: ProyavleniePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.proyavleniePopupService
                    .open(ProyavlenieDialogComponent as Component, params['id']);
            } else {
                this.proyavleniePopupService
                    .open(ProyavlenieDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
