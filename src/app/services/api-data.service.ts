import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiDataService {

  constructor(private http: HttpClient) { }

    host = 'http://localhost:2020';

  getCuentasContables() {
    const _URL = this.host+'/api/cuentas_contables';

    return this.http.get(_URL);
  }

  getDetalleAsiento() {
    const _URL = this.host+'/api/detalle_asiento';

    return this.http.get(_URL);
  }

  getCuentasAsiento() {
    const _URL = this.host+'/api/cuentas_asiento';

    return this.http.get(_URL);
  }
}
