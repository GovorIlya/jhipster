import { BaseEntity } from './../../shared';

export class ReasonAndProfilactic implements BaseEntity {
    constructor(
        public id?: number,
        public text2?: string,
        public text3?: string,
        public proyavlenie?: BaseEntity,
    ) {
    }
}
