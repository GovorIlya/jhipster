/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { JhipsterTestModule } from '../../../test.module';
import { ProyavlenieComponent } from '../../../../../../main/webapp/app/entities/proyavlenie/proyavlenie.component';
import { ProyavlenieService } from '../../../../../../main/webapp/app/entities/proyavlenie/proyavlenie.service';
import { Proyavlenie } from '../../../../../../main/webapp/app/entities/proyavlenie/proyavlenie.model';

describe('Component Tests', () => {

    describe('Proyavlenie Management Component', () => {
        let comp: ProyavlenieComponent;
        let fixture: ComponentFixture<ProyavlenieComponent>;
        let service: ProyavlenieService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [ProyavlenieComponent],
                providers: [
                    ProyavlenieService
                ]
            })
            .overrideTemplate(ProyavlenieComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ProyavlenieComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProyavlenieService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Proyavlenie(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.proyavlenies[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
