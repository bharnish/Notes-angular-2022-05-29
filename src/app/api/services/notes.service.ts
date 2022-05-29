/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Note } from '../models/note';
import { StringData } from '../models/string-data';
@Injectable({
  providedIn: 'root',
})
class NotesService extends __BaseService {
  static readonly getApiNotesPath = '/api/Notes';
  static readonly postApiNotesPath = '/api/Notes';
  static readonly getApiNotesIdPath = '/api/Notes/{id}';
  static readonly putApiNotesIdPath = '/api/Notes/{id}';
  static readonly deleteApiNotesIdPath = '/api/Notes/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param DbKey undefined
   * @return Success
   */
  getApiNotesResponse(DbKey?: string): __Observable<__StrictHttpResponse<Array<Note>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (DbKey != null) __headers = __headers.set('DbKey', DbKey.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Notes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Note>>;
      })
    );
  }
  /**
   * @param DbKey undefined
   * @return Success
   */
  getApiNotes(DbKey?: string): __Observable<Array<Note>> {
    return this.getApiNotesResponse(DbKey).pipe(
      __map(_r => _r.body as Array<Note>)
    );
  }

  /**
   * @param params The `NotesService.PostApiNotesParams` containing the following parameters:
   *
   * - `body`:
   *
   * - `DbKey`:
   *
   * @return Success
   */
  postApiNotesResponse(params: NotesService.PostApiNotesParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.body;
    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Notes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param params The `NotesService.PostApiNotesParams` containing the following parameters:
   *
   * - `body`:
   *
   * - `DbKey`:
   *
   * @return Success
   */
  postApiNotes(params: NotesService.PostApiNotesParams): __Observable<string> {
    return this.postApiNotesResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `NotesService.GetApiNotesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `DbKey`:
   *
   * @return Success
   */
  getApiNotesIdResponse(params: NotesService.GetApiNotesIdParams): __Observable<__StrictHttpResponse<Note>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Notes/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Note>;
      })
    );
  }
  /**
   * @param params The `NotesService.GetApiNotesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `DbKey`:
   *
   * @return Success
   */
  getApiNotesId(params: NotesService.GetApiNotesIdParams): __Observable<Note> {
    return this.getApiNotesIdResponse(params).pipe(
      __map(_r => _r.body as Note)
    );
  }

  /**
   * @param params The `NotesService.PutApiNotesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * - `DbKey`:
   */
  putApiNotesIdResponse(params: NotesService.PutApiNotesIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Notes/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `NotesService.PutApiNotesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * - `DbKey`:
   */
  putApiNotesId(params: NotesService.PutApiNotesIdParams): __Observable<null> {
    return this.putApiNotesIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `NotesService.DeleteApiNotesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `DbKey`:
   */
  deleteApiNotesIdResponse(params: NotesService.DeleteApiNotesIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Notes/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `NotesService.DeleteApiNotesIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `DbKey`:
   */
  deleteApiNotesId(params: NotesService.DeleteApiNotesIdParams): __Observable<null> {
    return this.deleteApiNotesIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module NotesService {

  /**
   * Parameters for postApiNotes
   */
  export interface PostApiNotesParams {
    body?: StringData;
    DbKey?: string;
  }

  /**
   * Parameters for getApiNotesId
   */
  export interface GetApiNotesIdParams {
    id: string;
    DbKey?: string;
  }

  /**
   * Parameters for putApiNotesId
   */
  export interface PutApiNotesIdParams {
    id: string;
    body?: StringData;
    DbKey?: string;
  }

  /**
   * Parameters for deleteApiNotesId
   */
  export interface DeleteApiNotesIdParams {
    id: string;
    DbKey?: string;
  }
}

export { NotesService }
