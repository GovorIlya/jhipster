import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { ReasonAndProfilactic } from './reason-and-profilactic.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<ReasonAndProfilactic>;

@Injectable()
export class ReasonAndProfilacticService {

    private resourceUrl =  SERVER_API_URL + 'api/reason-and-profilactics';

    constructor(private http: HttpClient) { }

    create(reasonAndProfilactic: ReasonAndProfilactic): Observable<EntityResponseType> {
        const copy = this.convert(reasonAndProfilactic);
        return this.http.post<ReasonAndProfilactic>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(reasonAndProfilactic: ReasonAndProfilactic): Observable<EntityResponseType> {
        const copy = this.convert(reasonAndProfilactic);
        return this.http.put<ReasonAndProfilactic>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ReasonAndProfilactic>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<ReasonAndProfilactic[]>> {
        const options = createRequestOption(req);
        return this.http.get<ReasonAndProfilactic[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<ReasonAndProfilactic[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: ReasonAndProfilactic = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<ReasonAndProfilactic[]>): HttpResponse<ReasonAndProfilactic[]> {
        const jsonResponse: ReasonAndProfilactic[] = res.body;
        const body: ReasonAndProfilactic[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to ReasonAndProfilactic.
     */
    private convertItemFromServer(reasonAndProfilactic: ReasonAndProfilactic): ReasonAndProfilactic {
        const copy: ReasonAndProfilactic = Object.assign({}, reasonAndProfilactic);
        return copy;
    }

    /**
     * Convert a ReasonAndProfilactic to a JSON which can be sent to the server.
     */
    private convert(reasonAndProfilactic: ReasonAndProfilactic): ReasonAndProfilactic {
        const copy: ReasonAndProfilactic = Object.assign({}, reasonAndProfilactic);
        return copy;
    }
}
