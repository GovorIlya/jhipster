/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterTestModule } from '../../../test.module';
import { ReasonAndProfilacticDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/reason-and-profilactic/reason-and-profilactic-delete-dialog.component';
import { ReasonAndProfilacticService } from '../../../../../../main/webapp/app/entities/reason-and-profilactic/reason-and-profilactic.service';

describe('Component Tests', () => {

    describe('ReasonAndProfilactic Management Delete Component', () => {
        let comp: ReasonAndProfilacticDeleteDialogComponent;
        let fixture: ComponentFixture<ReasonAndProfilacticDeleteDialogComponent>;
        let service: ReasonAndProfilacticService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [ReasonAndProfilacticDeleteDialogComponent],
                providers: [
                    ReasonAndProfilacticService
                ]
            })
            .overrideTemplate(ReasonAndProfilacticDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ReasonAndProfilacticDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ReasonAndProfilacticService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
