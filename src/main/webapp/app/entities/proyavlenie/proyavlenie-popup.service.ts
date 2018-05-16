import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { Proyavlenie } from './proyavlenie.model';
import { ProyavlenieService } from './proyavlenie.service';

@Injectable()
export class ProyavleniePopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private proyavlenieService: ProyavlenieService

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
                this.proyavlenieService.find(id)
                    .subscribe((proyavlenieResponse: HttpResponse<Proyavlenie>) => {
                        const proyavlenie: Proyavlenie = proyavlenieResponse.body;
                        this.ngbModalRef = this.proyavlenieModalRef(component, proyavlenie);
                        resolve(this.ngbModalRef);
                    });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.proyavlenieModalRef(component, new Proyavlenie());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    proyavlenieModalRef(component: Component, proyavlenie: Proyavlenie): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.proyavlenie = proyavlenie;
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
