import { BaseEntity } from './../../shared';

export class UnitDescription implements BaseEntity {
    constructor(
        public id?: number,
        public createYear?: string,
        public square?: string,
        public collesctors?: string,
        public prst?: number,
        public sbros?: string,
        public description?: any,
    ) {
    }
}
