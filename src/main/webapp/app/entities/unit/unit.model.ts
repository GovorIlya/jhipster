import { BaseEntity } from './../../shared';

export class Unit implements BaseEntity {
    constructor(
        public id?: number,
        public unitName?: string,
        public unitDescription?: BaseEntity,
        public images?: BaseEntity[],
        public researchMethods?: BaseEntity[],
        public typesProblems?: BaseEntity[],
        public ratingMethods?: BaseEntity[],
    ) {
    }
}
