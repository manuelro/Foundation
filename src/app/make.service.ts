/**
 * tha MakeService service
 * Use this service to fetch data from the server
 * using Edmunds API
 */

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import './rxjs-operators';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MakeService {
  private endpoints = {
    makes: 'http://api.edmunds.com/api/vehicle/v2/makes',
    make: 'http://api.edmunds.com/api/vehicle/v2/'
  }
  private fmt : string = 'json';
  private apiKey : string = 'wnwub8ew5ytv458nqfu6frmv';

  constructor(private http: Http) {}

  getMakes(): Observable<any> {
    let params : URLSearchParams = new URLSearchParams();

    params.set('fmt', this.fmt);
    params.set('api_key', this.apiKey);

    return this.http.get(this.endpoints.makes, { search: params })
      .map(this.extractMakes)
      .catch(this.handleError);
  }

  getMakeByNiceName(niceName : string): Observable<any> {
    let params : URLSearchParams = new URLSearchParams();

    params.set('fmt', this.fmt);
    params.set('api_key', this.apiKey);

    return this.http.get(this.endpoints.make + niceName, { search: params })
      .map(this.extractMake)
      .catch(this.handleError);
  }

  private extractMake(res: Response) {
    let body = res.json();
    return body || [];
  }

  private extractMakes(res: Response) {
    let body = res.json();
    return body.makes || [];
  }

  private handleError(error: any) {
    let errMsg = (error.message)
    ? error.message : error.status
    ? `${error.status} - ${error.statusText}` : 'Server error';

    console.error(errMsg, error.status);

    return Observable.throw(errMsg);
  }

}
