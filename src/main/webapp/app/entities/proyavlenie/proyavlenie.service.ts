import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { Proyavlenie } from './proyavlenie.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Proyavlenie>;

@Injectable()
export class ProyavlenieService {

    private resourceUrl =  SERVER_API_URL + 'api/proyavlenies';

    constructor(private http: HttpClient) { }

    create(proyavlenie: Proyavlenie): Observable<EntityResponseType> {
        const copy = this.convert(proyavlenie);
        return this.http.post<Proyavlenie>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(proyavlenie: Proyavlenie): Observable<EntityResponseType> {
        const copy = this.convert(proyavlenie);
        return this.http.put<Proyavlenie>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Proyavlenie>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Proyavlenie[]>> {
        const options = createRequestOption(req);
        return this.http.get<Proyavlenie[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Proyavlenie[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Proyavlenie = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Proyavlenie[]>): HttpResponse<Proyavlenie[]> {
        const jsonResponse: Proyavlenie[] = res.body;
        const body: Proyavlenie[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Proyavlenie.
     */
    private convertItemFromServer(proyavlenie: Proyavlenie): Proyavlenie {
        const copy: Proyavlenie = Object.assign({}, proyavlenie);
        return copy;
    }

    /**
     * Convert a Proyavlenie to a JSON which can be sent to the server.
     */
    private convert(proyavlenie: Proyavlenie): Proyavlenie {
        const copy: Proyavlenie = Object.assign({}, proyavlenie);
        return copy;
    }
}
