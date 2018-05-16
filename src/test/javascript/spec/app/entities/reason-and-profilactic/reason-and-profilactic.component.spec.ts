/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { JhipsterTestModule } from '../../../test.module';
import { ReasonAndProfilacticComponent } from '../../../../../../main/webapp/app/entities/reason-and-profilactic/reason-and-profilactic.component';
import { ReasonAndProfilacticService } from '../../../../../../main/webapp/app/entities/reason-and-profilactic/reason-and-profilactic.service';
import { ReasonAndProfilactic } from '../../../../../../main/webapp/app/entities/reason-and-profilactic/reason-and-profilactic.model';

describe('Component Tests', () => {

    describe('ReasonAndProfilactic Management Component', () => {
        let comp: ReasonAndProfilacticComponent;
        let fixture: ComponentFixture<ReasonAndProfilacticComponent>;
        let service: ReasonAndProfilacticService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [ReasonAndProfilacticComponent],
                providers: [
                    ReasonAndProfilacticService
                ]
            })
            .overrideTemplate(ReasonAndProfilacticComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ReasonAndProfilacticComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ReasonAndProfilacticService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new ReasonAndProfilactic(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.reasonAndProfilactics[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
