import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FiremawDto} from 'ngx-firemaw-client';
import {plainToClass} from 'class-transformer';

@Injectable()
export class FiremawService {

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<FiremawDto> {
    return this.http.get(url).pipe(map((data: any) => {
      return plainToClass(FiremawDto, data);
    }));
  }

  public post(url: string, firemawDto?: FiremawDto): Observable<any> {
    return this.http.post(url, firemawDto);
  }

  public put(url: string, firemawDto?: FiremawDto) {
    return this.http.put(url, firemawDto);
  }

  public delete(url: string) {
    return this.http.delete(url);
  }

}
