import { BaseEntity } from './../../shared';

export class TypesProblems implements BaseEntity {
    constructor(
        public id?: number,
        public nameOfType?: string,
        public problemImageContentType?: string,
        public problemImage?: any,
        public unit?: BaseEntity,
        public proyavlenies?: BaseEntity[],
    ) {
    }
}
