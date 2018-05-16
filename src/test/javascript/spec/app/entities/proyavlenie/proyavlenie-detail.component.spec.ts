/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { JhipsterTestModule } from '../../../test.module';
import { ProyavlenieDetailComponent } from '../../../../../../main/webapp/app/entities/proyavlenie/proyavlenie-detail.component';
import { ProyavlenieService } from '../../../../../../main/webapp/app/entities/proyavlenie/proyavlenie.service';
import { Proyavlenie } from '../../../../../../main/webapp/app/entities/proyavlenie/proyavlenie.model';

describe('Component Tests', () => {

    describe('Proyavlenie Management Detail Component', () => {
        let comp: ProyavlenieDetailComponent;
        let fixture: ComponentFixture<ProyavlenieDetailComponent>;
        let service: ProyavlenieService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [ProyavlenieDetailComponent],
                providers: [
                    ProyavlenieService
                ]
            })
            .overrideTemplate(ProyavlenieDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProyavlenieDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProyavlenieService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Proyavlenie(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.proyavlenie).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
