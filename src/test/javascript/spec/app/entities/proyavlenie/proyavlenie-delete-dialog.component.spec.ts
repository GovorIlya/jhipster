/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { JhipsterTestModule } from '../../../test.module';
import { ProyavlenieDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/proyavlenie/proyavlenie-delete-dialog.component';
import { ProyavlenieService } from '../../../../../../main/webapp/app/entities/proyavlenie/proyavlenie.service';

describe('Component Tests', () => {

    describe('Proyavlenie Management Delete Component', () => {
        let comp: ProyavlenieDeleteDialogComponent;
        let fixture: ComponentFixture<ProyavlenieDeleteDialogComponent>;
        let service: ProyavlenieService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [ProyavlenieDeleteDialogComponent],
                providers: [
                    ProyavlenieService
                ]
            })
            .overrideTemplate(ProyavlenieDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProyavlenieDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProyavlenieService);
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
