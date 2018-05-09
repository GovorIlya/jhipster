import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipsterDescriptionModule } from './description/description.module';
import { JhipsterFactormethodModule } from './factormethod/factormethod.module';
import { JhipsterKaptaModule } from './k-apta/kapta.module';
import { JhipsterProblemtypesModule } from './problemtypes/problemtypes.module';
import { JhipsterResearchmethodModule } from './researchmethod/researchmethod.module';
import { JhipsterTeachstateModule } from './teachstate/teachstate.module';
/* jhipster-needle-add-pageset-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterDescriptionModule,
        JhipsterFactormethodModule,
        JhipsterKaptaModule,
        JhipsterProblemtypesModule,
        JhipsterResearchmethodModule,
        JhipsterTeachstateModule,
        /* jhipster-needle-add-pageset-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterPageSetsModule {}
