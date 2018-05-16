import { BaseEntity } from './../../shared';

export class Unit implements BaseEntity {
    constructor(
        public id?: number,
        public unitName?: string,
        public description?: BaseEntity,
        public resaerchMethod?: BaseEntity,
        public ratingMethod?: BaseEntity,
        public images?: BaseEntity[],
        public typesProblems?: BaseEntity[],
    ) {
    }
}
