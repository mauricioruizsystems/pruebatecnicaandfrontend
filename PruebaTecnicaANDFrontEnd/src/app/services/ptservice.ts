import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Cuentanos, Opinion, OtrosTemas, Tramites } from '../models/ptmodels';


@Injectable({
  providedIn: 'root'
})
export class ptService {

  private url: string;
  private token: string;

  constructor(
    private httpClient: HttpClient) {
    this.url = environment.apiUrl;
    this.token = environment.token;

  }



  GetTramites(): Observable<any> {
    return this.httpClient.get<Tramites[]>(this.url + '/api/pruebatecnica/GetTramites?token=' + this.token);
  }

  GetOtrosTemas(): Observable<any> {
    return this.httpClient.get<OtrosTemas[]>(this.url + '/api/pruebatecnica/GetOtrosTemas?token=' + this.token);
  }

  GetOpinion(): Observable<any> {
    return this.httpClient.get<Opinion[]>(this.url + '/api/pruebatecnica/GetOpinion?token=' + this.token);
  }

  GetCuentanos(): Observable<any> {
    return this.httpClient.get<Cuentanos[]>(this.url + '/api/pruebatecnica/GetCuentanos?token=' + this.token);
  }

  addCuentanos(data: Cuentanos): any {
    return this.httpClient.post<any>(this.url + '/encuesta/parametricas/addCuentanos?token=' + this.token, data);
  }

}