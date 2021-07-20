import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get('https://rickandmortyapi.com/api/episode');
  }
}
