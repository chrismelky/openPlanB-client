/**
 * server API
 * server API documentation
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { OptionValue } from '../model/optionValue';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class OptionValueResourceService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createOptionValue
     * 
     * @param OptionValue optionValue
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createOptionValueUsingPOST(OptionValue: OptionValue, observe?: 'body', reportProgress?: boolean): Observable<OptionValue>;
    public createOptionValueUsingPOST(OptionValue: OptionValue, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OptionValue>>;
    public createOptionValueUsingPOST(OptionValue: OptionValue, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OptionValue>>;
    public createOptionValueUsingPOST(OptionValue: OptionValue, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (OptionValue === null || OptionValue === undefined) {
            throw new Error('Required parameter OptionValue was null or undefined when calling createOptionValueUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<OptionValue>(`${this.basePath}/api/option-values`,
            OptionValue,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteOptionValue
     * 
     * @param Id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteOptionValueUsingDELETE(Id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteOptionValueUsingDELETE(Id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteOptionValueUsingDELETE(Id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteOptionValueUsingDELETE(Id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (Id === null || Id === undefined) {
            throw new Error('Required parameter Id was null or undefined when calling deleteOptionValueUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/api/option-values/${encodeURIComponent(String(Id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllOptionValues
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllOptionValuesUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<OptionValue>>;
    public getAllOptionValuesUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<OptionValue>>>;
    public getAllOptionValuesUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<OptionValue>>>;
    public getAllOptionValuesUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<OptionValue>>(`${this.basePath}/api/option-values`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getOptionValue
     * 
     * @param Id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOptionValueUsingGET(Id: number, observe?: 'body', reportProgress?: boolean): Observable<OptionValue>;
    public getOptionValueUsingGET(Id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OptionValue>>;
    public getOptionValueUsingGET(Id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OptionValue>>;
    public getOptionValueUsingGET(Id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (Id === null || Id === undefined) {
            throw new Error('Required parameter Id was null or undefined when calling getOptionValueUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<OptionValue>(`${this.basePath}/api/option-values/${encodeURIComponent(String(Id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateOptionValue
     * 
     * @param OptionValue optionValue
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateOptionValueUsingPUT(OptionValue: OptionValue, observe?: 'body', reportProgress?: boolean): Observable<OptionValue>;
    public updateOptionValueUsingPUT(OptionValue: OptionValue, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OptionValue>>;
    public updateOptionValueUsingPUT(OptionValue: OptionValue, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OptionValue>>;
    public updateOptionValueUsingPUT(OptionValue: OptionValue, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (OptionValue === null || OptionValue === undefined) {
            throw new Error('Required parameter OptionValue was null or undefined when calling updateOptionValueUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<OptionValue>(`${this.basePath}/api/option-values`,
            OptionValue,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}