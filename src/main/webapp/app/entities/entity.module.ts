import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterUnitModule } from './unit/unit.module';
import { JhipsterUnitDescriptionModule } from './unit-description/unit-description.module';
import { JhipsterImageModule } from './image/image.module';
import { JhipsterResearchMethodModule } from './research-method/research-method.module';
import { JhipsterTypesProblemsModule } from './types-problems/types-problems.module';
import { JhipsterRatingMethodModule } from './rating-method/rating-method.module';
import { JhipsterProyavlenieModule } from './proyavlenie/proyavlenie.module';
import { JhipsterReasonAndProfilacticModule } from './reason-and-profilactic/reason-and-profilactic.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterUnitModule,
        JhipsterUnitDescriptionModule,
        JhipsterImageModule,
        JhipsterResearchMethodModule,
        JhipsterTypesProblemsModule,
        JhipsterRatingMethodModule,
        JhipsterProyavlenieModule,
        JhipsterReasonAndProfilacticModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterEntityModule {}
