import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeroData } from './heros';
import { Observable, catchError, map } from 'rxjs';
import * as CryptoJS from 'crypto-js';

const API_URL = `${environment.apiURL}`;
const API_KEY = `${environment.apiKey}`;
const API_HASH = `${environment.apiKey2}`;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<HeroData[] | any> {
    const timestamp = new Date().getTime().toString();
    const hash = CryptoJS.MD5(timestamp + API_KEY + API_HASH);

    return this.http
      .get<any>(
        `${API_URL}/characters?ts=${timestamp}&apikey=${API_KEY}&hash=${hash}`
      )
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error) => {
          return error;
        })
      );
  }

  public getHeroById(id: number): Observable<HeroData | any> {
    const timestamp = new Date().getTime().toString();
    const hash = CryptoJS.MD5(timestamp + API_KEY + API_HASH);

    return this.http
      .get<any>(
        `${API_URL}/characters/${id}?ts=${timestamp}&apikey=${API_KEY}&hash=${hash}`
      )
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((error) => {
          return error;
        })
      );
  }
}
