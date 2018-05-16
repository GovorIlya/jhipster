import { BaseEntity } from './../../shared';

export class ResearchMethod implements BaseEntity {
    constructor(
        public id?: number,
        public headString?: string,
        public researchMethod?: any,
        public methodImageContentType?: string,
        public methodImage?: any,
        public fileContentType?: string,
        public file?: any,
    ) {
    }
}
