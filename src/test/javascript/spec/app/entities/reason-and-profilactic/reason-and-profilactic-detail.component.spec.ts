/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { JhipsterTestModule } from '../../../test.module';
import { ReasonAndProfilacticDetailComponent } from '../../../../../../main/webapp/app/entities/reason-and-profilactic/reason-and-profilactic-detail.component';
import { ReasonAndProfilacticService } from '../../../../../../main/webapp/app/entities/reason-and-profilactic/reason-and-profilactic.service';
import { ReasonAndProfilactic } from '../../../../../../main/webapp/app/entities/reason-and-profilactic/reason-and-profilactic.model';

describe('Component Tests', () => {

    describe('ReasonAndProfilactic Management Detail Component', () => {
        let comp: ReasonAndProfilacticDetailComponent;
        let fixture: ComponentFixture<ReasonAndProfilacticDetailComponent>;
        let service: ReasonAndProfilacticService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [ReasonAndProfilacticDetailComponent],
                providers: [
                    ReasonAndProfilacticService
                ]
            })
            .overrideTemplate(ReasonAndProfilacticDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ReasonAndProfilacticDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ReasonAndProfilacticService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new ReasonAndProfilactic(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.reasonAndProfilactic).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
