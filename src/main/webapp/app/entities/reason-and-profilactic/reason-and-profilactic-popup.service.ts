import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { ReasonAndProfilactic } from './reason-and-profilactic.model';
import { ReasonAndProfilacticService } from './reason-and-profilactic.service';

@Injectable()
export class ReasonAndProfilacticPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private reasonAndProfilacticService: ReasonAndProfilacticService

    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.reasonAndProfilacticService.find(id)
                    .subscribe((reasonAndProfilacticResponse: HttpResponse<ReasonAndProfilactic>) => {
                        const reasonAndProfilactic: ReasonAndProfilactic = reasonAndProfilacticResponse.body;
                        this.ngbModalRef = this.reasonAndProfilacticModalRef(component, reasonAndProfilactic);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.reasonAndProfilacticModalRef(component, new ReasonAndProfilactic());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    reasonAndProfilacticModalRef(component: Component, reasonAndProfilactic: ReasonAndProfilactic): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.reasonAndProfilactic = reasonAndProfilactic;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
