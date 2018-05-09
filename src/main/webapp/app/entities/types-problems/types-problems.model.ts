import { BaseEntity } from './../../shared';

export class TypesProblems implements BaseEntity {
    constructor(
        public id?: number,
        public nameOfType?: string,
        public proyavlenie?: any,
        public reasons?: any,
        public profilactika?: any,
        public problemImageContentType?: string,
        public problemImage?: any,
        public typesDocumentContentType?: string,
        public typesDocument?: any,
        public unit?: BaseEntity,
    ) {
    }
}
