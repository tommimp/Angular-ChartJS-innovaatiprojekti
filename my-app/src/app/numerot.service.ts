import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, retry, map } from 'rxjs/operators';

@Injectable()
export class NumeroService {
  constructor(private _http: HttpClient) { }

  fetchNumero() {
    return this._http.get('https://random-data-api.com/api/number/random_number').pipe(map(result => result));
     }
  fetchDevice(){
    return this._http.get('https://random-data-api.com/api/device/random_device').pipe(map(result => result));
     }
   
   }