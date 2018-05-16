/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterTestModule } from '../../../test.module';
import { ReasonAndProfilacticDialogComponent } from '../../../../../../main/webapp/app/entities/reason-and-profilactic/reason-and-profilactic-dialog.component';
import { ReasonAndProfilacticService } from '../../../../../../main/webapp/app/entities/reason-and-profilactic/reason-and-profilactic.service';
import { ReasonAndProfilactic } from '../../../../../../main/webapp/app/entities/reason-and-profilactic/reason-and-profilactic.model';
import { ProyavlenieService } from '../../../../../../main/webapp/app/entities/proyavlenie';

describe('Component Tests', () => {

    describe('ReasonAndProfilactic Management Dialog Component', () => {
        let comp: ReasonAndProfilacticDialogComponent;
        let fixture: ComponentFixture<ReasonAndProfilacticDialogComponent>;
        let service: ReasonAndProfilacticService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [ReasonAndProfilacticDialogComponent],
                providers: [
                    ProyavlenieService,
                    ReasonAndProfilacticService
                ]
            })
            .overrideTemplate(ReasonAndProfilacticDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ReasonAndProfilacticDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ReasonAndProfilacticService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new ReasonAndProfilactic(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({body: entity})));
                        comp.reasonAndProfilactic = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'reasonAndProfilacticListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new ReasonAndProfilactic();
                        spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({body: entity})));
                        comp.reasonAndProfilactic = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'reasonAndProfilacticListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
