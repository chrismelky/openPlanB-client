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

import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { User } from '../model/user';
import { UserDTO } from '../model/userDTO';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';


@Injectable({
    providedIn: 'root'
})
export class UserResourceService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
     * createUser
     * 
     * @param userDTO userDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUserUsingPOST(userDTO: UserDTO, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public createUserUsingPOST(userDTO: UserDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public createUserUsingPOST(userDTO: UserDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public createUserUsingPOST(userDTO: UserDTO, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (userDTO === null || userDTO === undefined) {
            throw new Error('Required parameter userDTO was null or undefined when calling createUserUsingPOST.');
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

        return this.httpClient.post<User>(`${this.basePath}/api/users`,
            userDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteUser
     * 
     * @param login login
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUserUsingDELETE(login: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUserUsingDELETE(login: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUserUsingDELETE(login: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUserUsingDELETE(login: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling deleteUserUsingDELETE.');
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

        return this.httpClient.delete<any>(`${this.basePath}/api/users/${encodeURIComponent(String(login))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllUsers
     * 
     * @param offset 
     * @param page Page number of the requested page
     * @param pageNumber 
     * @param pageSize 
     * @param paged 
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param sortSorted 
     * @param sortUnsorted 
     * @param unpaged 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsersUsingGET(offset?: number, page?: number, pageNumber?: number, pageSize?: number, paged?: boolean, size?: number, sort?: Array<string>, sortSorted?: boolean, sortUnsorted?: boolean, unpaged?: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<UserDTO>>;
    public getAllUsersUsingGET(offset?: number, page?: number, pageNumber?: number, pageSize?: number, paged?: boolean, size?: number, sort?: Array<string>, sortSorted?: boolean, sortUnsorted?: boolean, unpaged?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<UserDTO>>>;
    public getAllUsersUsingGET(offset?: number, page?: number, pageNumber?: number, pageSize?: number, paged?: boolean, size?: number, sort?: Array<string>, sortSorted?: boolean, sortUnsorted?: boolean, unpaged?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<UserDTO>>>;
    public getAllUsersUsingGET(offset?: number, page?: number, pageNumber?: number, pageSize?: number, paged?: boolean, size?: number, sort?: Array<string>, sortSorted?: boolean, sortUnsorted?: boolean, unpaged?: boolean, observe: any = 'body', reportProgress: boolean = false): Observable<any> {











        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('pageNumber', <any>pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
        }
        if (paged !== undefined && paged !== null) {
            queryParameters = queryParameters.set('paged', <any>paged);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sort) {
            sort.forEach((element) => {
                queryParameters = queryParameters.append('sort', <any>element);
            })
        }
        if (sortSorted !== undefined && sortSorted !== null) {
            queryParameters = queryParameters.set('sort.sorted', <any>sortSorted);
        }
        if (sortUnsorted !== undefined && sortUnsorted !== null) {
            queryParameters = queryParameters.set('sort.unsorted', <any>sortUnsorted);
        }
        if (unpaged !== undefined && unpaged !== null) {
            queryParameters = queryParameters.set('unpaged', <any>unpaged);
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

        return this.httpClient.get<Array<UserDTO>>(`${this.basePath}/api/users`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAuthorities
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAuthoritiesUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public getAuthoritiesUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public getAuthoritiesUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public getAuthoritiesUsingGET(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<Array<string>>(`${this.basePath}/api/users/authorities`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getUser
     * 
     * @param login login
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserUsingGET(login: string, observe?: 'body', reportProgress?: boolean): Observable<UserDTO>;
    public getUserUsingGET(login: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDTO>>;
    public getUserUsingGET(login: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDTO>>;
    public getUserUsingGET(login: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling getUserUsingGET.');
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

        return this.httpClient.get<UserDTO>(`${this.basePath}/api/users/${encodeURIComponent(String(login))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateUser
     * 
     * @param userDTO userDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUserUsingPUT(userDTO: UserDTO, observe?: 'body', reportProgress?: boolean): Observable<UserDTO>;
    public updateUserUsingPUT(userDTO: UserDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDTO>>;
    public updateUserUsingPUT(userDTO: UserDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDTO>>;
    public updateUserUsingPUT(userDTO: UserDTO, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (userDTO === null || userDTO === undefined) {
            throw new Error('Required parameter userDTO was null or undefined when calling updateUserUsingPUT.');
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

        return this.httpClient.put<UserDTO>(`${this.basePath}/api/users`,
            userDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
