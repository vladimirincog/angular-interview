import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

export interface GetOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType: 'arraybuffer';
    withCredentials?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ApiServerService {

    constructor(private httpClient: HttpClient) {
    }

    public get<T>(uri: string, options?: GetOptions): Observable<any> {
        return this.httpClient.get(uri, options);
    }
}