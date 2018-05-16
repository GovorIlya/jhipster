import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Proyavlenie } from './proyavlenie.model';
import { ProyavleniePopupService } from './proyavlenie-popup.service';
import { ProyavlenieService } from './proyavlenie.service';

@Component({
    selector: 'jhi-proyavlenie-delete-dialog',
    templateUrl: './proyavlenie-delete-dialog.component.html'
})
export class ProyavlenieDeleteDialogComponent {

    proyavlenie: Proyavlenie;

    constructor(
        private proyavlenieService: ProyavlenieService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.proyavlenieService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'proyavlenieListModification',
                content: 'Deleted an proyavlenie'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-proyavlenie-delete-popup',
    template: ''
})
export class ProyavlenieDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private proyavleniePopupService: ProyavleniePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.proyavleniePopupService
                .open(ProyavlenieDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
