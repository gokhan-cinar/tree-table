import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataJsonService {

  private jsonURL = './assets/dataset.json';


  constructor( private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

}
