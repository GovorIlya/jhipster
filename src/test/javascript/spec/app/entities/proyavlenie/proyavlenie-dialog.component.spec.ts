/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterTestModule } from '../../../test.module';
import { ProyavlenieDialogComponent } from '../../../../../../main/webapp/app/entities/proyavlenie/proyavlenie-dialog.component';
import { ProyavlenieService } from '../../../../../../main/webapp/app/entities/proyavlenie/proyavlenie.service';
import { Proyavlenie } from '../../../../../../main/webapp/app/entities/proyavlenie/proyavlenie.model';
import { TypesProblemsService } from '../../../../../../main/webapp/app/entities/types-problems';

describe('Component Tests', () => {

    describe('Proyavlenie Management Dialog Component', () => {
        let comp: ProyavlenieDialogComponent;
        let fixture: ComponentFixture<ProyavlenieDialogComponent>;
        let service: ProyavlenieService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [ProyavlenieDialogComponent],
                providers: [
                    TypesProblemsService,
                    ProyavlenieService
                ]
            })
            .overrideTemplate(ProyavlenieDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProyavlenieDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProyavlenieService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Proyavlenie(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(new HttpResponse({body: entity})));
                        comp.proyavlenie = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'proyavlenieListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Proyavlenie();
                        spyOn(service, 'create').and.returnValue(Observable.of(new HttpResponse({body: entity})));
                        comp.proyavlenie = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'proyavlenieListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
