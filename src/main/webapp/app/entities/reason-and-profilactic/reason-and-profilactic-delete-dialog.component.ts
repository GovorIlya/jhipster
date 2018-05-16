import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ReasonAndProfilactic } from './reason-and-profilactic.model';
import { ReasonAndProfilacticPopupService } from './reason-and-profilactic-popup.service';
import { ReasonAndProfilacticService } from './reason-and-profilactic.service';

@Component({
    selector: 'jhi-reason-and-profilactic-delete-dialog',
    templateUrl: './reason-and-profilactic-delete-dialog.component.html'
})
export class ReasonAndProfilacticDeleteDialogComponent {

    reasonAndProfilactic: ReasonAndProfilactic;

    constructor(
        private reasonAndProfilacticService: ReasonAndProfilacticService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.reasonAndProfilacticService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'reasonAndProfilacticListModification',
                content: 'Deleted an reasonAndProfilactic'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-reason-and-profilactic-delete-popup',
    template: ''
})
export class ReasonAndProfilacticDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private reasonAndProfilacticPopupService: ReasonAndProfilacticPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.reasonAndProfilacticPopupService
                .open(ReasonAndProfilacticDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
