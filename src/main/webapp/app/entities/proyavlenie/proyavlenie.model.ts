import { BaseEntity } from './../../shared';

export class Proyavlenie implements BaseEntity {
    constructor(
        public id?: number,
        public text1?: string,
        public typesProblems?: BaseEntity,
        public reasonAndProfilactics?: BaseEntity[],
    ) {
    }
}
