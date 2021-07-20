import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get('http://ec2-3-81-147-145.compute-1.amazonaws.com:7777/portalserver/services/rest/api/v1/private/keep/alive');
  }
}
