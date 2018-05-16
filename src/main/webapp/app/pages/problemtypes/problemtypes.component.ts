import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';
import { Observable } from 'rxjs/Rx';

import { Problemtypes } from './problemtypes.model';
import { ProblemtypesService } from './problemtypes.service';
import { Principal } from '../../shared';
import {testclass} from './testclass'
import {container} from './container';
import {UnitService} from '../../entities/unit';
import {Unit} from '../../entities/unit';

import {TypesProblems} from '../../entities/types-problems';
import {TypesProblemsService} from '../../entities/types-problems';
import {Proyavlenie} from '../../entities/proyavlenie';
import {ProyavlenieService} from '../../entities/proyavlenie';
import {ReasonAndProfilactic} from '../../entities/reason-and-profilactic';
import {ReasonAndProfilacticService} from '../../entities/reason-and-profilactic';
import {UnitDescription} from '../../entities/unit-description/unit-description.model';

@Component({
    selector: 'jhi-problemtypes',
    templateUrl: './problemtypes.component.html'
})
export class ProblemtypesComponent implements OnInit, OnDestroy {

mytxt:string;
img:string;
img2:string;



    problemtypes: any;

    currentAccount: any;
    eventSubscriber: Subscription;
    isSaving: Boolean;
    routeData: any;
    links: any;
    totalItems: any;
    queryCount: any;
    itemsPerPage: any;
    page: any;
    predicate: any;
    previousPage: any;
    reverse: any;
    container:testclass[] = [];

    units: Unit[];
    typesProblems: TypesProblems[];
    proyavlenies: Proyavlenie[];
    reasons: ReasonAndProfilactic[];

    constructor(
        private unitService: UnitService,
        private typesProblemsService: TypesProblemsService,
        private proyavlenieService: ProyavlenieService,
        private reasonsService: ReasonAndProfilacticService,

        private problemtypesService: ProblemtypesService,
        private parseLinks: JhiParseLinks,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {

        this.unitService.query().subscribe(
            (res: HttpResponse<Unit[]>) => {
                this.units = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );

        this.typesProblemsService.query().subscribe(
            (res: HttpResponse<TypesProblems[]>) => {
                this.typesProblems = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );

        this.proyavlenieService.query().subscribe(
            (res: HttpResponse<Proyavlenie[]>) => {
                this.proyavlenies = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );

        this.reasonsService.query().subscribe(
            (res: HttpResponse<ReasonAndProfilactic[]>) => {
                this.reasons = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );


    }

    ngOnInit() {
        this.loadAll();

       /* let problem = new Problemtypes();
        problem.problem = "qwe";
        problem.resheniye = "11111";
        problem.variant = "11111";
        let problem1 = new Problemtypes();
        problem1.problem = "abc";
        problem1.resheniye = "2222222";
        problem1.variant = "22222222";
        let test = new testclass();
        test.types = [];
        test.types.push(problem);
        test.types.push(problem);
        test.types.push(problem1);
        test.types.push(problem1);
        test.kartinka = "https://www.primefaces.org/primeng/assets/showcase/images/demo/car/Fiat.png";
        test.stroka = "1111111111";
        let test1 = new testclass();
        test1.types = [];
        test1.kartinka = "https://www.primefaces.org/primeng/assets/showcase/images/demo/car/Fiat.png";
        test1.stroka = "222222222";
        this.container.push(test);
        this.container.push(test1);*/

        //this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });

        this.registerChangeInProblemtypes();
    }

    ngOnDestroy() {

        this.eventManager.destroy(this.eventSubscriber);
    }
    registerChangeInProblemtypes() {
        this.eventSubscriber = this.eventManager.subscribe('problemtypesListModification', (response) => this.loadAll());
    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
    onClickMe(){
       // if(this.typesProblems.length==1){
            this.mytxt=this.units[0].unitName;
            let problem = new Problemtypes();
            problem.problem = this.proyavlenies[0].text1;
            problem.resheniye = this.reasons[0].text3;
            problem.variant = this.reasons[0].text2;
            let problem1 = new Problemtypes();
            problem1.problem = this.proyavlenies[0].text1;
            problem1.resheniye = this.reasons[1].text3;
            problem1.variant = this.reasons[1].text2;
            let test = new testclass();
            test.types = [];
            test.types.push(problem);
            // test.types.push(problem);
            test.types.push(problem1);
            //test.types.push(problem1);
            this.img="data:"+ this.typesProblems[0].problemImage.problemImageContentType +";base64"+ this.typesProblems[0].problemImage.problemImage;
            test.kartinka = this.img;
            test.stroka = this.typesProblems[0].nameOfType;
        this.container.push(test);
       // }
       /* else {
            this.mytxt=this.units[0].unitName;
            let problem = new Problemtypes();
            problem.problem = this.proyavlenies[0].text1;
            problem.resheniye = this.reasons[0].text3;
            problem.variant = this.reasons[0].text2;
            let problem1 = new Problemtypes();
            problem1.problem = this.proyavlenies[0].text1;
            problem1.resheniye = this.reasons[1].text3;
            problem1.variant = this.reasons[1].text2;
            let test = new testclass();
            test.types = [];
            test.types.push(problem);
            // test.types.push(problem);
            test.types.push(problem1);
            //test.types.push(problem1);
            this.img="data:"+ this.typesProblems[0].problemImage.problemImageContentType +";base64"+ this.typesProblems[0].problemImage.problemImage;
            test.kartinka = this.img;
            test.stroka = this.typesProblems[0].nameOfType;


            let problem2 = new Problemtypes();
            problem2.problem = this.proyavlenies[1].text1;
            problem2.resheniye = this.reasons[1].text3;
            problem2.variant = this.reasons[1].text2;
            let problem3 = new Problemtypes();
            problem3.problem = this.proyavlenies[1].text1;
            problem3.resheniye = this.reasons[2].text3;
            problem3.variant = this.reasons[2].text2;


            let test1 = new testclass();
            test1.types = [];
            test1.types.push(problem2);
            // test.types.push(problem);
            test1.types.push(problem3);
            this.img2="data:"+ this.typesProblems[1].problemImage.problemImageContentType +";base64"+ this.typesProblems[1].problemImage.problemImage;
            test1.kartinka = this.img2;
            test1.stroka =this.typesProblems[1].nameOfType;
            this.container.push(test);
            this.container.push(test1);
        } */

    }
}
