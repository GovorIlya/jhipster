import { BaseEntity } from './../../shared';

export class RatingMethod implements BaseEntity {
    constructor(
        public id?: number,
        public ratingHead?: string,
        public ratingMethod?: any,
        public ratingImageContentType?: string,
        public ratingImage?: any,
        public ratingDocumentContentType?: string,
        public ratingDocument?: any,
    ) {
    }
}
