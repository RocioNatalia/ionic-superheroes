import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeroData } from './heros';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { CapacitorHttp } from '@capacitor/core';

const API_URL = `${environment.apiURL}`;
const API_KEY = `${environment.apiPublicKey}`;
const HASH_KEY = `${environment.apiHashKey}`;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<HeroData[]> {
    const timestamp = new Date().getTime().toString();
    const url = `${API_URL}/characters`;
    const hash = CryptoJS.MD5(timestamp + HASH_KEY + API_KEY).toString();

    return new Observable<HeroData[]>((observer) => {
      CapacitorHttp.request({
        method: 'GET',
        url: url,
        params: {
          ts: timestamp,
          apikey: API_KEY,
          hash: hash,
        },
      })
        .then((response: any) => {
          const heroesList = response?.data?.data?.results;
          observer.next(
            heroesList.map((e: any) => {
              return {
                ...e,
                thumbnail: `${e?.thumbnail?.path}.${e?.thumbnail?.extension}`,
              };
            })
          );
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  public getHeroById(id: number): Observable<HeroData> {
    const timestamp = new Date().getTime().toString();
    const url = `${API_URL}/characters/${id}`;
    const hash = CryptoJS.MD5(timestamp + HASH_KEY + API_KEY).toString();

    return new Observable<HeroData>((observer) => {
      CapacitorHttp.request({
        method: 'GET',
        url: url,
        params: {
          ts: timestamp,
          apikey: API_KEY,
          hash: hash,
        },
      })
        .then((response: any) => {
          const heroData = response?.data?.data?.results[0];
          console.log(heroData);
          observer.next({
            ...heroData,
            comics_amount: heroData.comics?.available,
            series_amount: heroData.series?.available,
            stories_amount: heroData.stories?.available,
            thumbnail: `${heroData?.thumbnail?.path}.${heroData?.thumbnail?.extension}`,
          });
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
